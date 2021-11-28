import { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import { Box, Container, Text, Image, Flex } from "@chakra-ui/react"

const Home = () => {
  const [lists, setLists] = useState([])
  const [book, setBook] = useState({})
  useEffect(() => {
    const date = new Date()
    const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
    const publishedDate = `${year}-${month}-${day}`
    const urlApi = "https://api.nytimes.com/svc/books/v3/lists/overview.json"
    const apiKey = "xAsZ254EaMyyzC6QCfA0hDIw0232ynXR"
    async function fetchBooks () {
      try {
        const res = await fetch(`${urlApi}?api-key=${apiKey}&publish_date=${publishedDate}`).then(r => r.json())
        // console.log(res.results)
        setLists(res.results.lists)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBooks()
  },[])

  return (
    <>
      <Helmet>
        <title>BookTracker Home</title>
        <meta name="description" content="Bookstore's home page" />
      </Helmet>
      <Box px={2}>
        {
          book.title ?
          <>
            <Box as="button" fontSize="md" borderRadius="md" bg="tomato" color="white" px={4} h={8} onClick={() => setBook({})}>Kembali</Box>
            <Flex mt={4}>
              <Image
                src={book.book_image}
                alt={book.title}
                boxSize="150px"
                objectFit="cover"
              />

              <Box p={4}>
                <Text fontSize="lg">{book.title}</Text>
                <Text fontSize="md">Author: {book.author}</Text>
                <Text fontSize="md">{book.description}</Text>
              </Box>
            </Flex>
          </>
          :
          lists && lists.map((list, i) => (
            <>
              <Text fontSize="md" key={i}>{list.list_name}</Text>
              <Flex>
                { list.books && list.books.map((_book, j) => (
                  <Box m="1" width="md" borderWidth="1px" borderRadius="sm" overflow="hidden" key={j} onClick={() => setBook(_book)}>
                    <Image src={_book.book_image} alt={_book.title} />
                    <Text fontSize="sm">{_book.title}</Text>
                  </Box>
                ))
              }
              </Flex>
            </>
          ))
        }
      </Box>
    </>
  )
}

export default Home