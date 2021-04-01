import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, theme } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  return (
    <Box >
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              cursor="pointer"
              size="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Criar novo
            </Button>
          </Flex>
          
          <Table colorSchema="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Roger Fernandes</Text>
                    <Text fontSize="sm" color="gray.300">roger.afernandes@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Roger Fernandes</Text>
                    <Text fontSize="sm" color="gray.300">roger.afernandes@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Roger Fernandes</Text>
                    <Text fontSize="sm" color="gray.300">roger.afernandes@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Roger Fernandes</Text>
                    <Text fontSize="sm" color="gray.300">roger.afernandes@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Roger Fernandes</Text>
                    <Text fontSize="sm" color="gray.300">roger.afernandes@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    cursor="pointer"
                    size="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}