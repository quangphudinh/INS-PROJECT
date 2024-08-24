import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../components_1/helpers/cookie";
import { getId } from "../../components_1/services/UserService";
import { useNavigate } from 'react-router-dom';
const ProfileLink = () => {
	const navigate = useNavigate();
	const refreshButton = () => {
		navigate("/inforUser");
	}

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
		<Tooltip
			hasArrow
			label={"Profile"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
				onClick={refreshButton}
			>
				<Avatar size={"sm"} src = {dataUser[0]?.image}/>
				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Link>
		</Tooltip>
	);
};

export default ProfileLink;