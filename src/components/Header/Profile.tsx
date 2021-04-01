import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile(){
  return (
    <Flex align="center"> 
      <Box mr="4" textAlign="right">
        <Text>Roger Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          roger.afernandes@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Roger Fernandes"/>
    </Flex>
  )
}