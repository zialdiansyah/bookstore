import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Flex, Box, Heading, Button, Spacer, Container } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail';
import Library from './pages/Library';

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="800px">
        <Flex py="2" mb={4}>
          <Box p="2">
            <Heading size="md"><Link to="/">BookTracker</Link></Heading>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal" mr="4">
              <Link to="/library">Library</Link>
            </Button>
            <Button colorScheme="teal" mr="4">
              Logout
            </Button>
          </Box>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
