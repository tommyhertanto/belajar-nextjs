
import dynamic from "next/dynamic";
import { Textarea, Input, Flex, Grid, GridItem, Card, CardBody, CardFooter, CardHeader, Heading, Text, Button, Box } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import { Result } from "postcss";
// import { endianness } from "os";

const LayoutComponent = dynamic(() => import("../../layout")
   
)
export default function AddNotes({}) {
    const router = useRouter();
    const [notes, setNotes] = useState({
    title:"",
    description:"",
})
    const HandleSubmit = async () => {
      try {
        const response = await fetch("https://service.pace-unv.cloud/api/notes", { method:'POST', 
          headers:{"content-type":"application/json", }, body:JSON.stringify(notes),           
        })
        const result = await response.json()
        if (result?.success) {
          router.push("/notes")
        }
        } catch (error) {}
      }


 return (
  <div>
   <LayoutComponent metaTitle="Notes">
   <Card margin="5" padding="5">
    <Heading>Add Notes</Heading>
    <Grid gap="5">
      <GridItem>
        <Text>Title</Text>
        <Input type="text" onChange={(event) => setNotes({ ...notes, title: event.target.value})}/>
      </GridItem>
      <GridItem>
        <Text>Description</Text>
        <Textarea onChange={(event) => setNotes({ ...notes, description: event.target.value})}/>
      </GridItem>
      <GridItem>
        <Button onClick={() => HandleSubmit()} colorScheme="blue"> Submit</Button>
      </GridItem>
    </Grid>
   </Card>
   </LayoutComponent>
  </div>
 );
}

