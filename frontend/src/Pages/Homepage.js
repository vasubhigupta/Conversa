import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel,  } from '@chakra-ui/react'
import Login from "../components/Login.js"
import SignUp from "../components/SignUp"

<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

</style>

const Homepage = () => {
  return (
    <Container waxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0px 15px 0px"
          borderRadius="lg"
          borderWidth="1px" 
        >
           <Text fontSize="4xl" fontFamily="Work Sans" color="black" d="flex" textAlign="center"> Conversa</Text>
        </Box>
        <Box
         bg={"white"}
         w="100%"

         p={4}
         borderRadius="lg"
         borderWidth="1px"
        >
        <Tabs variant='soft-rounded' colorScheme='pink'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
    </Container>
  )
}

export default Homepage