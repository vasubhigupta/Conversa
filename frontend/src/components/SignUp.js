import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
import { warning } from 'framer-motion';

function SignUp() {

  const [show, setShow] = useState(false)
  const [name,SetName] = useState();
  const [email, Setemail] = useState();
  const [confirmpassword, Setconfirmpassword] = useState();
  const [password, Setpassword] = useState();
  const [pic, Setpic] = useState();
  const [loading,setLoading] = useState(false);

  const toast = useToast();

  const handleClick = () => setShow(!show);

  const postDetail = (pics) => {
    //incomplete
    setLoading(true);
  }
  
  const submitHandler = () => {
    setLoading(true);
    if(!email || !name || !password || !confirmpassword){
      toast({
        title: "SignUp Unsuccessful",
        description: "Please fill all the details.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
      return ;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Incorrect Password",
        description: "You have entered incorrect password",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
      return;
    }
    
  }

  return (
    <VStack spacing='5px'>
      <FormControl id='name' isRequired>
          <FormLabel >Name</FormLabel>
          <Input placeholder='Name' 
                 onChange = {(event) => SetName(event.target.value) }
          />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' 
               onChange={(event) => Setemail(event.target.value)}
        />
      </FormControl>

      <FormControl id='password'  isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup>
         <Input type={show ? 'text' : 'password'}
                placeholder='Password'
                onChange={(event) => Setpassword(event.target.value)} 
         />
         <InputRightElement width='4.5 rem'>
            <Button h='1.70rem' size='sm' onClick={handleClick} bg='white' marginRight='1.5px' _hover={{ bg: "white" }}>
            {show ? "Hide" : "Show"}
          </Button>
         </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='confirm-password' isRequired>
        <FormLabel >Confirm Password</FormLabel>
        <InputGroup>
          <Input type={show ? 'text' : 'password'}
            placeholder='Confirm Password'
            onChange={(event) => Setconfirmpassword(event.target.value)}
          />
          {/* <InputRightElement width='4.5 rem'>
            <Button h='1.70rem' size='sm' onClick={handleClick} bg='white' marginRight='1.5px' _hover={{ bg: "white" }}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement> */}
        </InputGroup>
      </FormControl>

      {/* <FormControl id='pic' >
        <FormLabel>Upload your Picture</FormLabel>
        <Input type='file' 
               p={1.5} 
               accept='image/*' 
               onChange={(event) => postDetail(event.target.files[0])} />
      </FormControl> */}

      <Button
       colorScheme='pink'
       width="100%"
       style={{marginTop: 15}}
       onClick={submitHandler}
       isLoading = {loading}

      >
        Sign Up
      </Button>

    </VStack>
  )
}

export default SignUp