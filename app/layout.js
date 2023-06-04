import { Inter } from "next/font/google"
import global from "../app/global.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AeroFund",
  description: "CrowdFunding Descentralizado",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{metadata.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
