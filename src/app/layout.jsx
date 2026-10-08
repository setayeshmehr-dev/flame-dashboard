import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/themeProvider"
import { Toaster } from "@/components/ui/sonner"
import { UserProfileProvider } from "@/context/UserProfileContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Flame Dashboard",
  description:
    "A modern admin dashboard built with Next.js, React, Tailwind CSS, and shadcn/ui.",
}

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full overscroll-none antialiased`}
    >
      <body className="flex min-h-full flex-col overscroll-none">
        <ThemeProvider>
          <UserProfileProvider>
            {children}
            <Toaster duration={5000} />
          </UserProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}