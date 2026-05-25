export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Property Name',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Full Location',
      type: 'string',
    },
    {
      name: 'locationShort',
      title: 'Short Location',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Property Type',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'beds',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'baths',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'parking',
      title: 'Parking Spaces',
      type: 'number',
    },
    {
      name: 'guests',
      title: 'Max Guests',
      type: 'number',
    },
    {
      name: 'pool',
      title: 'Pool',
      type: 'string',
    },
    {
      name: 'view',
      title: 'View',
      type: 'string',
    },
    {
      name: 'kitchen',
      title: 'Kitchen',
      type: 'string',
    },
    {
      name: 'laundry',
      title: 'Laundry',
      type: 'string',
    },
    {
      name: 'housekeeper',
      title: 'Housekeeper',
      type: 'string',
    },
    {
      name: 'petFriendly',
      title: 'Pet Friendly',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'channels',
      title: 'Booking Channels',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}