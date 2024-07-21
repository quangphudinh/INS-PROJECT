import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<Button
				w={"full"}
				colorScheme='blue'
				size={"sm"}
				fontSize={14}
			>
				Sign Up
			</Button>
		</>
	);
};

export default Signup;