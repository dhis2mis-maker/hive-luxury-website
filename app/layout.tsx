import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Hive | Luxury Management',
  description: 'Professionally managed luxury villas and penthouses across Cape Town\'s most coveted addresses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: '#08080a' }}>
        {children}
      </body>
    </html>
  )
}