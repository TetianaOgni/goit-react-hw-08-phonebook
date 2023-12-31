import { Spinner, Center } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  )
}

export default Loader
