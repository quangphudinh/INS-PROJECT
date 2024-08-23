import { Avatar, Flex, Box, Text } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"


const PostHeader = ({ username, avatar, time }) => {
    const startDate = new Date(time);
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60)); // 1000 ms * 60 s * 60 min * 24 hours
    let stringDaysDifference = "";
    if (daysDifference > 60) {
        daysDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        stringDaysDifference = daysDifference + "h";
        if (daysDifference > 24) {
            daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            stringDaysDifference = daysDifference + "d";
        }
    } else {
        stringDaysDifference = daysDifference + "m";
    }

    //dropdown
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (

        <>
            <Flex justifyContent={"space-between"}
                alignItems={"center"}
                w={"full"} my={2}
            >
                <Flex alignItems={"center"} gap={2}>
                    <Avatar src={avatar} alt="user profile pic" size={"sm"} />
                    <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                        {username}
                        <Box color={"gray.500"}>
                            • {stringDaysDifference}
                        </Box>
                    </Flex>
                </Flex>

                <Box cursor={"pointer"}>
                    <Text as="button" onClick={onOpen} fontSize={18} color={"blue.500"} fontWeight={"bold"} _hover={{ color: "white" }} transition={"0.2s ease-in-out"}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </Text>
                </Box>
            </Flex>

            {/* Modal Component */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Your modal content here */}
                        This is the modal content.
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>


    )
}

export default PostHeader