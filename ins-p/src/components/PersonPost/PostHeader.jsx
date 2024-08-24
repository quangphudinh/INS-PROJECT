import { Avatar, Flex, Box, Text, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { deletePost } from '../../components_1/services/UserService';
// import { getPublicIdFromUrl } from '../../components_1/helpers/getPublicID';
// import axios from 'axios';

// const cloud_name = "insdata";
// const api_key = 661999431146437;
// const api_secret = "VL1O92KBqVhl5KWpqZCE6cuWsMw";

const PostHeader = ({ id, username, avatar, time ,imgUrl }) => {
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


    const { isOpen, onOpen, onClose } = useDisclosure();

   /* const deleteFile = () => {
        const publicId = getPublicIdFromUrl(imgUrl);
        const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy`;
        // Dữ liệu cần gửi bao gồm `public_id` của ảnh cần xóa
        const formData = new FormData();
        formData.append("public_id", publicId);
        // Thực hiện yêu cầu POST để xóa ảnh
        axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${api_key}`, // Đảm bảo rằng bạn có token API chính xác
            },
        })
            .then(res => {
                if (res.data.result === 'ok') {
                    console.log("Image deleted successfully");
                } else {
                    console.log("Failed to delete image");
                }
            })
            .catch(err => console.log(err));
    }; */

    const handleRepost = () => {

        onClose();
        Swal.fire({
            title: "Báo Cáo?",
            text: "Bạn muốn báo cáo bài viết này!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Báo cáo!",
            cancelButtonText: "Huỷ"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Hoàn Thành!",
                    text: "Bạn đã báo cáo bài viết này thành công!",
                    icon: "success"
                });
            }
        });
    }


    const deleteItem = async () => {
        // deleteFile();
        const result = await deletePost(id);
        if (result) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            window.location.reload();
        }
    }

    const handleDelete = () => {
        // console.log("delete");
        // console.log(id);
        onClose();
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
            }
        });
    }

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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent style={{ borderRadius: "20px" }}>
                    <ModalHeader></ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody marginBottom={8} display={"flex"} flexDirection={"column"} gap={2}>
                        <Button shadow={"lg"} colorScheme='red' variant='ghost' onClick={handleRepost}>Báo Cáo</Button>
                        <Button shadow={"lg"} colorScheme='teal' variant='ghost' onClick={handleDelete}>Xóa</Button>
                        <Button shadow={"lg"} colorScheme='teal' variant='ghost' onClick={onClose}>Hủy</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>


    )
}

export default PostHeader