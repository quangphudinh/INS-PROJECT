import { VStack } from "@chakra-ui/react"
import { Text, Flex, Box } from "@chakra-ui/layout"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} 
            justifyContent={"space-between"}
            w={"full"}
        >
            <Text fontSize={12}
                fontWeight={"bold"}
                color={"gray.500"}
                cursor={"pointer"}
            >
                Suggested for you
            </Text>
            <Text fontSize={12}
                fontWeight={"bold"}
                _hover={{color:"gray.400"}}
                cursor={"pointer"}
            >
                See all
            </Text>
        </Flex>
        <SuggestedUser name='Freddie Freeman' followers={1300} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name='Gavin Stone' followers={7540} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Kike Hernandez' followers={8888} avatar='https://bit.ly/code-beast'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 INSTAGRAM FROM META
        </Box>
    </VStack>
  )
}

export default SuggestedUsers