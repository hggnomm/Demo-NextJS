"use client";
import React from "react";
import TableComponent from "@/components/table/table";
import useSWR from "swr";

const Blogs = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      // params using SWR. When catching data first, if the data does not change, when returning to the previous page, there will be no fetch api.
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-3">
      <TableComponent blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
};

export default Blogs;
