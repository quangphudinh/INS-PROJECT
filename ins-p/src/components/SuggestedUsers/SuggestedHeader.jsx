import { Avatar, Text, Flex, Button } from "@chakra-ui/react"

import { getCookie } from "../../components_1/helpers/cookie";
import { getId } from "../../components_1/services/UserService";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
// import EditProfile from "../../components_1/userEdit/EditProfile";

import Modal from 'react-modal';
Modal.setAppElement('#root'); // Đặt phần tử gốc


const SuggestedHeader = () => {
    const [dataUser, setDataUser] = useState({});
    const id = getCookie("id");

    useEffect(() => {
        const fectApi = async () => {
            const result = await getId(id);
            setDataUser(result);
        };
        fectApi();
    }, [id]);

    // console.log(dataUser);



    return (
        <>
            {dataUser.length > 0 ? (
                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex alignItems={"center"} gap={2}>
                        <Avatar name="myinsta" size={"md"} src={dataUser[0].image}>
                            {/* <EditProfile dataUser={dataUser} /> */}
                        </Avatar>
                        
                        <Text fontSize={12} fontWeight={"bold"} width={'full'} marginLeft={5} >
                            {dataUser[0].username}
                        </Text>
                        <NavLink to="/logout">
                            <Button
                                size={"xs"}
                                background={"transparent"}
                                _hover={{ background: "transparent" }}
                                fontSize={14}
                                fontWeight={"medium"}
                                color={"blue.400"}
                                cursor={"pointer"}
                                pl={10}
                            >
                                Log out
                            </Button>

                        </NavLink>
                    </Flex>
                </Flex>
            ) : (
                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex alignItems={"center"} gap={2}>
                        <Avatar name="myinsta" size={"lg"} src="/profilepic.png" />
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
            )}


        </>

    )
}

export default SuggestedHeader