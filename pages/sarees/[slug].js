import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import SareeSingle from "@/components/SareeSingle";







export default function sarees({saree}) {
   
  return (
    <div>
      <SareeSingle saree={saree} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "saree"] {
    slug {
      current
    }
  }
  `;

  const sarees = await client.fetch(query);

  const paths = sarees.map((product) => ({
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
  const query = `*[_type == "saree" && slug.current == '${slug}'][0]`;
  
  
  const saree = await client.fetch(query);



  return {
    props: {
      saree
     }
  }
}

