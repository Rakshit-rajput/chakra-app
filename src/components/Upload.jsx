import { Container,VStack,HStack, Input,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloud, AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={"10vmax"}/>
            <form>

                <HStack>
                    <Input required type={"file"} />
                    <Button colorScheme={"purple"} type={'submit'}>
                        Upload
                    </Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload