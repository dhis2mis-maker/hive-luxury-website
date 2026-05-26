'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '../../../schemas'

const config = defineConfig({
  name: 'hive-luxury',
  title: 'The Hive Luxury Management',
  projectId: 'cjyjqtda',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return <NextStudio config={config} />
}
