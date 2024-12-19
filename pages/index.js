
import dynamic from "next/dynamic";
import Layout from "../layout";

const LayoutComponent = dynamic(() => import("../layout")
   
)
export default function Main() {
   
 return (
  <div>
   <LayoutComponent metaTitle="Home">
<p> Home</p>
   </LayoutComponent>
  </div>
 );
}
