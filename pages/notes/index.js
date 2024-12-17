
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout")
   
)
export default function Notes({notes}) {
    console.log("notes data => ", notes)
   
 return (
  <div>
   <LayoutComponent metaTitle="Notes">
   {notes.data.map ((item, index) => (
    <div key={item.id} style ={{border: "1px solid blue", marginBottom: "5px"}}>
    <p>{item.title}</p>
    <p>{item.description}</p>
    </div>      
))}
   </LayoutComponent>
  </div>
 );
}

export async function getStaticProps() {
    const res = await fetch("https://service.pace-unv.cloud/api/notes")
    const notes = await res.json()
    return { props: { notes }, revalidate: 10 }
  }