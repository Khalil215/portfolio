import {createClient} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const client = {
projectId: "kag3emz0",
dataset:"production",
apiVersion:"2023-01-17",
useCdn: false,
}

export const sanityClient = createClient(client)

export const urlFor = (source: any)=>createImageUrlBuilder(client).image(source)