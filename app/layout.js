import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Messages from "@/components/Messages";

export const metadata = {
  title: "DevConnect",
  description: "A developer-focused app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
