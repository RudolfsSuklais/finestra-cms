import React from 'react'

export const metadata = {
  title: 'Finestra CMS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='lv'>
      <body>{children}</body>
    </html>
  )
}
