import { Container, Skeleton, VStack, Flex, Box } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'
import { getdataPost, getdataUser } from '../../components_1/services/UserService'


const FeedPosts = () => {
    const [postData, setPostData] = useState([])
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
            {postData.map((post, idx) => (
                <>
                    <FeedPost key={idx} img={post.image} username={userData[post.userId]?.username} avatar={userData[post.userId]?.image} title={post.body} />
                    {console.log(post)}
                </>

            ))
        }
        </Container>
    )
}

export default FeedPosts