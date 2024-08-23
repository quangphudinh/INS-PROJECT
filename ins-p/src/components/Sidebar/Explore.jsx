import { Box, Link, Tooltip } from "@chakra-ui/react";
import { MdExplore } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const Explore = () => {
  return (
        <Tooltip
			hasArrow
			label={"Home"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<MdExplore size={25} />
				<Box display={{ base: "none", md: "block" }}>Explore</Box>
			</Link>
		</Tooltip>
  )
}

export default Explore