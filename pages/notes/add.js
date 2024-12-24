
import dynamic from "next/dynamic";
import { Textarea, Input, Flex, Grid, GridItem, Card, CardBody, CardFooter, CardHeader, Heading, Text, Button, Box } from "@chakra-ui/react";
import { useEffect, useState,} from "react";
import { useRouter } from "next/router";
import Layout from "../../layout";
import { Result } from "postcss";
import { useMutation } from "@/hooks/useMutation";
// import { endianness } from "os";

const LayoutComponent = dynamic(() => import("../../layout")
   
)
export default function AddNotes({}) {
    const {mutate} = useMutation()
    const router = useRouter();
    const [notes, setNotes] = useState({
    title:"",
    description:"",
})
    const HandleSubmit = async () => {
      const response = await mutate ({url :"https://service.pace-unv.cloud/api/notes", payload:notes,

        })
      };


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

