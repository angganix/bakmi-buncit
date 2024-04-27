import { Poppins } from "next/font/google";
import "./globals.css";
import TopNav from "@/layouts/TopNav";
import Credit from "@/layouts/Credit";
import WhatsappButton from "@/components/WhatsappButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bakmi Buncit",
  description:
    "Bakmi enak, mantap dengan harga yang pasti gak buncit alias irit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[poppins.className, "bg-gray-50"].join(" ")}>
        <TopNav />
        <main>{children}</main>
        <Credit />
        <WhatsappButton />
      </body>
    </html>
  );
}
