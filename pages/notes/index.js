
import dynamic from "next/dynamic";
import { Flex, Grid, GridItem, Card, CardBody, CardFooter, CardHeader, Heading, Text, Button, Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import { endianness } from "os";
import { useQueries } from "@/hooks/useQueries";

const LayoutComponent = dynamic(() => import("../../layout")
   
)
export default function Notes({}) {
    const {data, isLoading} = useQueries({
      prefixUrl: "https://service.pace-unv.cloud/api/notes",
    })
    const [notes, setNotes] = useState()
    const router = useRouter();
    // console.log("data => ", data)

    const HandleDelete = async (id) => {
      try {
        const response = await fetch('https://service.pace-unv.cloud/api/notes/delete/' + id, { 
          method:'DELETE',
        })
        const result = await response.json()
        if (result?.success) {
          router.reload()
        }
        } catch (error) {}    
    }

 


 return (
  <div>
   <LayoutComponent metaTitle="Notes">
   <Box padding ="5" margin="5">
   <Flex justifyContent="end">
    <Button colorScheme="blue" onClick={() => router.push("/notes/add")}>
      Add Notes
    </Button>
   </Flex>
   {
    isLoading ? (
      <Flex justifyContent="center" alignItems="center">
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
      </Flex>
    ) : (
      <Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {data?.data?.map((item) => (
    <GridItem key={item.id}>
       <Card>
       <CardHeader>
        <Heading>
            {item?.title}
        </Heading>
       </CardHeader>
       <CardBody>
            <text>
                {item?.description}
            </text>
       </CardBody>
       <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button onClick={() => router.push(`/notes/edit/${item?.id}`)} flex='1' variant='ghost'>
      Edit
    </Button>
    <Button onClick={() => HandleDelete(item?.id)} flex='1' colorScheme="red">
      Delete
    </Button>
  </CardFooter>
       </Card>
    </GridItem>
))}
            
        </Grid>
    </Flex>
    )
   }

    </Box>
   </LayoutComponent>
  </div>
 );
}

// export async function getStaticProps() {
//     const res = await fetch("https://service.pace-unv.cloud/api/notes")
//     const notes = await res.json()
//     return { props: { notes }, revalidate: 10 }
//   }