// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Button, Input } from "@chakra-ui/react";
import { getRegister } from "../../components_1/services/UserService";
import { createUser } from "../../components_1/services/UserService";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../components_1/actions/action_login";
import { radomToken } from "../../components_1/helpers/createToke";

const Signup = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userName = e.target[0].value;
        const email = e.target[1].value;
		const passWord = e.target[2].value;
        const cfPassWord = e.target[3].value;

		// console.log(userName, email, passWord, cfPassWord);
		if(userName !== "" && email !== "" && passWord !== "" && cfPassWord !== "" && passWord === cfPassWord){
			const token = radomToken();
			const data = {
				username: userName,
				email: email,
				password: passWord,
				token : token
			};
			const response = await getRegister(email,userName);
			if(response.length === 0){
				const result = await createUser(data);
				console.log(result);
				dispatch(checkLogin(true));
				
			}else{
				alert("Email already exists");
			}
		}
	}
	

	return (
		<>
        <form onSubmit={handleSubmit}
		style={{ display: "flex", flexDirection: "column", gap: "10px" , width: "100%" }}>
		<Input
				placeholder='Username'
				fontSize={14}
				size={"sm"}
				type='text'
			/>

			<Input
				placeholder='Email'
				fontSize={14}
				type='email'
				size={"sm"}
			/>
			<Input
				placeholder='Password'
				fontSize={14}
				size={"sm"}
				type='password'
			/>

			<Input
				placeholder='Confirm Password'
				fontSize={14}
				size={"sm"}
				type='password'
			/>

			<Button
				w={"full"}
				colorScheme='blue'
				size={"sm"}
				fontSize={14}
				type='submit'
			>
				Sign Up
			</Button>
		</form>	
		</>
	);
};

export default Signup;