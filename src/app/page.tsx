"use client";
import useSWR from "swr";
import TableComponent from "@/components/table/table";

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
  if(!data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>{data?.length}</div>
      <TableComponent blogs={data}/>
    </div>
  );
}
