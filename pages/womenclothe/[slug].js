import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import WomenclotheSingle from "@/components/WomenclotheSingle";






export default function womenclothe({womenclothe}) {
  
   
  return (
    <div>
      <WomenclotheSingle womenclothe={womenclothe} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "womensclothe"] {
    slug {
      current
    }
  }
  `;

  const womenclothes = await client.fetch(query);

  const paths = womenclothes.map((product) => ({
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
  const query = `*[_type == "womensclothe" && slug.current == '${slug}'][0]`;
  
  
  const womenclothe = await client.fetch(query);



  return {
    props: {
      womenclothe
     }
  }
}

