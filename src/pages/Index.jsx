import { Box, Container, Heading, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box as="header">
          <Heading as="h1" size="2xl" textAlign="center">Welcome to My Personal Blog</Heading>
          <Text mt={4} fontSize="xl" textAlign="center">Discover stories, insights, and more from my daily life.</Text>
        </Box>
        <Box as="section" id="blog">
          <Heading as="h2" size="xl">Latest Posts</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} pt={5}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 3</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box as="section" id="contact" pt={10}>
          <Heading as="h2" size="xl">Contact Me</Heading>
          <VStack spacing={5} pt={5}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;