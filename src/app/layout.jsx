import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider"
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const jetbrains = JetBrains_Mono({subsets: ["latin"], variable: "--font-mono"});


export const metadata = {
  title: "Flame Dashboard",
  description: "",
};

const themeInitScript = `
try {
  var color = localStorage.getItem("colorPreset") || "red";
  document.documentElement.dataset.colorPreset = color;
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`${inter.variable} ${jetbrains.variable} overscroll-none h-full antialiased`} >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className=" min-h-full overscroll-none flex flex-col">
        <ThemeProvider>
          {children}
          <Toaster
            duration={5000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}