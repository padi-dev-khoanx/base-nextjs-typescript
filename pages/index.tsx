import LayoutDocument from "@/src/components/layouts/LayoutDocument";
import Dashboar from "@/src/view/Home";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutDocument title="Home">
      <Dashboar />
    </LayoutDocument>
  );
}
