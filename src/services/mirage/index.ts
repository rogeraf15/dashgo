import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer(){
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      //criar uma tabela de user
      //partial, algumas colunas de user podem estar em branco
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`
        },
        email(){
          return faker.internet.email().toLowerCase();
        },
        createdAt(){
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 200);
    },

    //para fazer o CRUD automatico
    routes() {
      this.namespace = 'api'; //todas as  chamadas vao começar com 'api', api/users
      this.timing = 750;

      this.get('/users', function(schema, request){
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd);
        
        return new Response(
          200,
          { 'x-total-count' : String(total) },
          { users }
        );
      
        
      });
      this.get('/users/:id');
      this.post('/users');

      this.namespace = ''; //resetar o namespace, para nao ter conflito com o next
      this.passthrough()
    }
  })

  return server;
};