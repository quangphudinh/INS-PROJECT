import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
// import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { checkLogin } from "../../components_1/actions/action_login";
const AuthForm = () => {
	const [login, setLogin] = useState(true);
	const isLogin = useSelector((state) => state.loginReducer);
    // console.log(isLogin);
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		setLogin(!login);
		dispatch(checkLogin(login));
		// console.log(isLogin);
	};

	return (
		<>
			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<VStack spacing={4}>
					<Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

					{isLogin ? <Login /> : <Signup />}

					{/* ---------------- OR -------------- */}
					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"gray"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>

					<GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
				</VStack>
			</Box>

			<Box border={"1px solid gray"} borderRadius={4} padding={5} >
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Box>
					<Box onClick={handleClick} color={"blue.500"} cursor={"pointer"}>
						{isLogin ? "Sign up" : "Log in"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;