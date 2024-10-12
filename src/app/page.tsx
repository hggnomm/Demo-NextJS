"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/namdeptrai.module.css";
import Table from "@/components/table/table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      console.log(await res.json());
    };

    fetchData();
  }, []);

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
