import { Box, Flex, Spinner } from "@chakra-ui/react";
import SideBar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {

	return (
		<Flex>
            <Box w={{ base: "70px", md: "240px" }}>
                <SideBar />
            </Box>
            
            <Box flex={1} w={{base:"calc(100% - 70px",md:"calc(100% - 240px)"}}>
                {children}
            </Box>
        </Flex>
	);
};

export default PageLayout;