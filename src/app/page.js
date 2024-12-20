import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>다시 해보자고</h1>
      <p>
        <Link href="/meals">MEALS</Link>
      </p>
      <p>
        <Link href="/meals/share">SHARE MEAL</Link>
      </p>
      <p>
        <Link href="/community">COMMUNITY</Link>
      </p>
    </div>
  );
}
