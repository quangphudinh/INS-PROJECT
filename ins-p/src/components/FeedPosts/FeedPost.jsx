import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = ({img, username, avatar ,title , time}) => {
  return (
    <>
        <PostHeader username={username} avatar={avatar} time = {time}/>
        <Box my={3}
            borderRadius={4}
            overflow={"hidden"}
        >
            <Image src= {img} alt={username}/>
        </Box>
        <PostFooter username={username} title={title}/>
    </>
    
  )
}

export default FeedPost