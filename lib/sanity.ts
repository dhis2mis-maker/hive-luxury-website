import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'cjyjqtda',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export const propertiesQuery = `*[_type == "property"] | order(_createdAt asc) {
  _id,
  name,
  tagline,
  location,
  locationShort,
  type,
  status,
  beds,
  baths,
  parking,
  guests,
  pool,
  view,
  kitchen,
  laundry,
  housekeeper,
  petFriendly,
  description,
  features,
  amenities,
  channels,
  gallery
}`