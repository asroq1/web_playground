import SideBar from '@/components/SideBar'
import { Container } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'next study',
  description: 'next study',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <SideBar />
        <Container maxWidth="sm">{children}</Container>
      </body>
    </html>
  )
}
