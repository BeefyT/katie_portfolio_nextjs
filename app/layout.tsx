import "../styles/globals.css"
import Header from "./Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="bg-[#fcd9e0]">
        <Header />
        {children}
      </body>
    </html>
  )
}
