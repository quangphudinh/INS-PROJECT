import { Avatar, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({username, avatar, time}) => {
    const startDate = new Date(time);
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60)); // 1000 ms * 60 s * 60 min * 24 hours
    let stringDaysDifference = "";
    if(daysDifference > 60){
        daysDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        stringDaysDifference = daysDifference + "h";
        if(daysDifference > 24){
            daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            stringDaysDifference = daysDifference + "d";
        }
    }else {
        stringDaysDifference = daysDifference + "m";
    }

    // console.log(username + " " + avatar + " " + time);

  return (
    <Flex justifyContent={"space-between"}
    alignItems={"center"}
    w={"full"} my={2}
        >
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} alt="user profile pic" size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {username}
                    <Box color={"gray.500"}>
                        • {stringDaysDifference}
                    </Box>
                </Flex>
            </Flex>
            <Box cursor={"pointer"}>
                <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}} transition={"0.2s ease-in-out"}>
                    Unfollow
                </Text>
            </Box>
    </Flex>
)
}

export default PostHeader