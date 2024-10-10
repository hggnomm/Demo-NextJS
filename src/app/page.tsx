import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>1</Link>
        </li>
      </ul>
    </div>
  );
}
