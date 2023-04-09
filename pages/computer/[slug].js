import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import ComputerSingle from "@/components/ComputerSingle";





export default function computer({computer}) {
   
  return (
    <div>
      <ComputerSingle computer={computer} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "computer"] {
    slug {
      current
    }
  }
  `;

  const computers = await client.fetch(query);

  const paths = computers.map((product) => ({
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
  const query = `*[_type == "computer" && slug.current == '${slug}'][0]`;
  
  
  const computer = await client.fetch(query);



  return {
    props: {
      computer
     }
  }
}
