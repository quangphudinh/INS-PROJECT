import { Avatar, Text, Flex, Button } from "@chakra-ui/react"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="myinsta" size={"lg"} src="/profilepic.png"/>
            <Text fontSize={12} fontWeight={"bold"}>
                myinsta_
            </Text>
            <Button
                size={"xs"}
				background={"transparent"}
				_hover={{ background: "transparent" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
                pl={20}
            >
                Log out
            </Button>
        </Flex>

    </Flex>
  )
}

export default SuggestedHeader