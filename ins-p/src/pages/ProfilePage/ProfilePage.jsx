import { Container, Flex, Box } from "@chakra-ui/react";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import PostOfPerson from "../../components/PersonPost/PostOfPerson";

const ProfilePage = () => {
	return (
		<Container maxW={"container.lg"}>
			<Flex gap={20}>
				<Box flex={2} py={10}>
					<PostOfPerson />
				</Box>
				<Box flex={3} mr={20}
					display={{base: "none", lg:"block"}}
					maxW={"300px"}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
	);
};

export default ProfilePage;