import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>다시 해보자고</h1>
      <Link href="/about">about</Link>
    </div>
  );
}
