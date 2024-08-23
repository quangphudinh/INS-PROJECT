import {
	Box,
	// Button,
	// CloseButton,
	Flex,
	// Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	// ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	// useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
// import { BsFillImageFill } from "react-icons/bs";
import { useState } from "react";
import { getCookie } from "../../components_1/helpers/cookie";

// upload file
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const randomId = () => {
	return Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
}

const rootData = {
	id: randomId(),
	userId: 0,
	title: `Post thu ${randomId()}`,
	// body: "",
	// image: "",
	like: 0,
	comment: 0,
	share: 0,
	postTime: new Date().toISOString()
}
// end upload file

const CreatePost = () => {
	const idUser = getCookie("id");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => setIsModalOpen(!isModalOpen);

	// up load file
	const [image, setImage] = useState();
	const presset_key = "insdataupload"
	const cloud_name = "insdata"
	const [data, setData] = useState(rootData)

	const handleFile = (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append("file", file)
		formData.append("upload_preset", presset_key)
		axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
			.then(res => setImage(res.data.secure_url))
			.catch(err => console.log(err))
	}

	const handleOnChange = async (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		if(data.userId !== idUser){
			data.userId = idUser
		}
		if (name === "image" && image != null) {
			setData({
				...data,
				[name]: image
			})
		} else {
			setData({
				...data,
				[name]: value
			})
		}
		// console.log("ham on change")
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(data)
		const respone = await fetch("http://localhost:3000/posts", {
			method: "POST",
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})

		const result = await respone.json();
		if (result) {
			window.location.reload();
			setIsModalOpen(false);
			Swal.fire({
				icon: 'success',
				title: 'Post created successfully!',
				showConfirmButton: false,
				timer: 1500
			})
			console.log("post created successfully")
		}
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	// end up load file




	return (
		<>
			<Tooltip
				hasArrow
				label={"Create"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={toggleModal}
				>
					<CreatePostLogo />
					<Box display={{ base: "none", md: "block" }}>Create</Box>
				</Flex>
			</Tooltip>


			<Modal 
				isOpen={isModalOpen} 
				size='xl' onClose={toggleModal} 
				style={customStyles}
                contentLabel="Example Modal"
			>
				<ModalOverlay />
				<ModalContent bg={"black"} borderRadius={"8px"}
					border={"1px solid gray"} maxW={"600px"}
					maxH={"800px"} m={"auto"} height={"500px"}>
					<ModalHeader textAlign={"center"}>Create New Post</ModalHeader>
					<ModalCloseButton onClick={toggleModal} /> {/* Step 6: Close modal on click */}
					<form onSubmit={handleSubmit}>
						<ModalBody pb={6}>
							<Textarea 
								marginBottom={5}
								id="title"
                            	name="body"
                            	onBlur={handleOnChange}
                            	placeholder="Share your caption here..." 
							/>
							<input mt={5} type='file' name="image" onChange={handleFile} />
							<img src= {image}
                            name="image"
                            onLoad={handleOnChange}
                            style={{
                                width: "150px",
                                height: "100%",
                                marginBottom: "0px",
								marginTop: "10px",
								border : "1px solid white",
								borderRadius : "8px"
                            }} alt="" />
							<Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"}>
								{/* <Button leftIcon={<BsFillImageFill />} >Post</Button> */}
								<Input type="submit" value="Post" />
							</Flex>
						</ModalBody>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePost;

