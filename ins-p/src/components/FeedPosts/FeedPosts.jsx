import { Container, Skeleton, VStack, Flex, Box } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'


const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex>
                <Skeleton size={10}/>
                <VStack gap={2} alignItems={"flex-start"}>
                    <Skeleton height='10px' w={"200px"}/>
                    <Skeleton height='10px' w={"200px"}/>
                </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>contens wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        {!isLoading && (
            <>
                <FeedPost 
                img='img1.png' username="atan14" avatar="/img1.png" />
                <FeedPost 
                    img='img2.png' username="quangphu111" avatar="/img2.png" />
                <FeedPost 
                    img='img3.png' username="assabutter" avatar="/img3.png" />
                <FeedPost 
                    img='img4.png' username="glenpowell" avatar="/img4.png" />
            </>
        )}
    </Container>
)
}

export default FeedPosts