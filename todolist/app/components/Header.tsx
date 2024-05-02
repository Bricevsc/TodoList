import {Flex, Heading, Text, Input, Button} from "@chakra-ui/react"

const Header = () => {
  return (
    <>
      <Flex p="2rem" direction="column" alignItems="center">
        <Heading as="h1" fontSize={64} noOfLines={1} className="tasklist-title">TaskList</Heading>
        <Text mt="1rem" className="tasklist-slogan">Un outil simple.</Text>
      </Flex>
    </>
  )
}

export default Header

