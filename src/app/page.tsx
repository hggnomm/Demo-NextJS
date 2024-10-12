import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/namdeptrai.module.css";
import Table from "@/components/table/table";

export default function Home() {
  return (
    <div>
      <ul>
        <li className={x.red}>
          <Link href={"/facebook"}>
            <span className={y.red}>Facebook</span>
          </Link>
        </li>
      </ul>
      <Table />
    </div>
  );
}
