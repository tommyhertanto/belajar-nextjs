
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout")
   
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
