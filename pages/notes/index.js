
import dynamic from "next/dynamic";
import { Flex, grid, GridItem, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { useEffect } from "react";
import Layout from "../layout";

const LayoutComponent = dynamic(() => import("../layout")
   
)
export default function Notes({}) {
    const [notes, setNotes] = useState()
    useEffect(() => {
        async function fetchingData() {
            const res = await fetch("https://service.pace-unv.cloud/api/notes")
            const ListNotes = await res.json()
            setNotes(ListNotes)
        }
        fetchingData()
    },[])

 return (
  <div>
   <LayoutComponent metaTitle="Notes">
    <Flex>
        <grid templateColumns="repeat(3, 1fr)" gap={5}>
        {notes?.data?.map((item) => (
    <GridItem key={item.id}>
        {item?.title}
    </GridItem>
))}
            
        </grid>
    </Flex>
   </LayoutComponent>
  </div>
 );
}

// export async function getStaticProps() {
//     const res = await fetch("https://service.pace-unv.cloud/api/notes")
//     const notes = await res.json()
//     return { props: { notes }, revalidate: 10 }
//   }