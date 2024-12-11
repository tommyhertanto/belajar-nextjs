import Layout from "@/layout";
import { useRouter } from "next/router";

export default function UserByName() {
 const router = useRouter();
 const { id } = router?.query;
 return (
  <div>
   <Layout>
<p> Users By Name { id }</p>
   </Layout>
  </div>
 );
}