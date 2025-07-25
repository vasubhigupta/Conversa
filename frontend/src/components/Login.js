import React from 'react'
import { VStack, InputGroup, InputRightElement, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react';

function Login() {
    const [show, setShow] = useState(false)
    const [email, Setemail] = useState();
    const [password, Setpassword] = useState();

    const handleClick = () => setShow(!show);

    const submitHandler = () => { }

    return (
        <VStack spacing='5px'>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Email'
                    onChange={(event) => Setemail(event.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'}
                        placeholder='Enter Password'
                        onChange={(event) => Setpassword(event.target.value)}
                    />
                    <InputRightElement width='4.5 rem'>
                        <Button h='1.70rem' size='sm' onClick={handleClick} bg='white' marginRight='1.5px' _hover={{ bg: "white" }}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme='pink'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Log in
            </Button>

        </VStack>
    )
}

export default Login