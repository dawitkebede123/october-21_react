import { useState } from 'react'
import { ChakraProvider,Box,Button } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} width='400px'>
      <Box  border={'1px solid black'}>
      <h1>fgfg</h1>
      <Button>click</Button>
      </Box>
      <Box border={'1px solid black'}>
       <h1>fgfg</h1>
      </Box>
      <Box border={'1px solid black'}>
      <h1>fgfg</h1>
      </Box>

      </Box>
    </ChakraProvider>
    
  )
}

export default App
