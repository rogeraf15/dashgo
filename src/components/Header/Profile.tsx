import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
  return (
    <Flex align="center"> 
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Roger Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          https://github.com/rogeraf15
        </Text>
      </Box>
      )}

      <Avatar size="md" name="Roger Fernandes"/>
    </Flex>
  )
}