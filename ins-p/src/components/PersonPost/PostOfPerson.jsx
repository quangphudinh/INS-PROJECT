import { Container, Skeleton, VStack, Flex, Box ,Image} from '@chakra-ui/react'
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
// import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'
import { getdataPost, getdataUser } from '../../components_1/services/UserService'
import { getCookie } from '../../components_1/helpers/cookie'

const PostOfPerson = () => {
    const [postData, setPostData] = useState([])
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const idUser = getCookie("id");

    // console.log(idUser);

    useEffect(() => {
        const fectApi = async () => {
            const resultpost = await getdataPost();
            const resultuser = await getdataUser();
            setPostData(resultpost.reverse());
            setUserData(resultuser);

        }
        fectApi();
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    // console.log(postData);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex>
                        <Skeleton size={10} />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height='10px' w={"200px"} />
                            <Skeleton height='10px' w={"200px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>contens wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {postData.map((post, idx) => {
                if (post.userId === parseInt(idUser)) {
                    return (
                        <div key={idx}>

                            <>
                                <PostHeader id = {post.id} username={userData[post.userId-1]?.username} avatar={userData[post.userId-1]?.image} time={post.postTime} imgUrl={post.image}/>
                                <Box my={3}
                                    borderRadius={4}
                                    overflow={"hidden"}
                                >
                                    <Image src={post.image} alt={userData[post.userId-1]?.username} />
                                </Box>
                                <PostFooter username={userData[post.userId-1]?.username} title={post.body} />
                            </>
                        </div>
                    )
                } else return null;
            })
            }
        </Container>
    )
}

export default PostOfPerson