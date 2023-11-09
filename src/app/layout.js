// Import the necessary hooks from next/server
import { useServer } from "next/server";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

// Mark the function with "use server"
useServer(setCategory);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Created By Md Kamran",
};

export default function RootLayout({ children }) {
  let category = "science";
  const setCategory = (current) => {
    category = current;
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar setCategory={setCategory} />
        <children params={category} />
      </body>
    </html>
  );
}
