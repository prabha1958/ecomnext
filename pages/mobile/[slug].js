import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import ComputerSingle from "@/components/ComputerSingle";
import MobileSingle from "@/components/MobileSingle";





export default function mobile({mobile}) {
   
  return (
    <div>
      <MobileSingle mobile={mobile} />
    </div>
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "mobile"] {
    slug {
      current
    }
  }
  `;

  const mobiles = await client.fetch(query);

  const paths = mobiles.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "mobile" && slug.current == '${slug}'][0]`;
  
  
  const mobile = await client.fetch(query);



  return {
    props: {
      mobile
     }
  }
}
