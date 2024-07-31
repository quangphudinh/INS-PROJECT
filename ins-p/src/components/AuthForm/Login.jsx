import { Button, Input } from "@chakra-ui/react";
import { login } from "../../components_1/services/UserService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../components_1/helpers/cookie";



const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

		// console.log(email, password);
		if(email !== "" && password !== ""){
			const response = await login(email, password);
			if(response.length > 0)
				{
					console.log(response);  
					setCookie("id", response[0].id, 1);
					setCookie("fullname", response[0].username , 1);
					setCookie("email", response[0].email, 1);
					setCookie("token", response[0].token, 1);
					// dispatch(checkLogin(true));
					navigate("/home");
				}
				else
					alert("Login Failed");
		}else
		alert("Please fill all fields");    
    }


	return (
		<>
			<form onSubmit={handleSubmit} 
				style={{ display: "flex", flexDirection: "column", gap: "10px" , width: "100%" }}>
				<Input
					placeholder='Email'
					fontSize={14}
					type='email'
					size={"sm"}
					marginBottom={5}
					// value={inputs.email}
					// onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
				/>
				<Input
					placeholder='Password'
					fontSize={14}
					size={"sm"}
					type='password'
					marginBottom={10}
					// value={inputs.password}
					// onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<Button
					w={"full"}
					colorScheme='blue'
					size={"sm"}
					fontSize={14}
					type="submit">
					Log in
				</Button>
			</form>
		</>
	);
};

export default Login;