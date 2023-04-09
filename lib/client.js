import   { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url";



export const client = createClient({
     projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
     dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
     apiVersion:process.env.NEXT_PUBLIC_API_VERSION,
     useCdn: true,
   
})

 