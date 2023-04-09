import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import MenclotheSingle from "@/components/MenclotheSingle";





export default function mobile({menclothe}) {
   
  return (
    <div>
      <MenclotheSingle menclothe={menclothe} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "mensclothe"][0..6] {
    slug {
      current
    }
  }
  `;

  const menclothes = await client.fetch(query);

  const paths = menclothes.map((product) => ({
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
  const query = `*[_type == "mensclothe" && slug.current == '${slug}'][0]`;
  
  
  const menclothe = await client.fetch(query);



  return {
    props: {
      menclothe
     }
  }
}

