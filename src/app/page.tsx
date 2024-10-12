"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/namdeptrai.module.css";
import Table from "@/components/table/table";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false, 
      // params using SWR. When catching data first, if the data does not change, when returning to the previous page, there will be no fetch api.
    },
  );
  return (
    <div>
      <div>{data?.length}</div>
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
