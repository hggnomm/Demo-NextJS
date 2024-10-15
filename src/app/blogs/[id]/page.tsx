"use client";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";

const ViewDetail = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
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
    <div>
      <div>
        <Link href={"/blogs"}>Go Back</Link>
      </div>
      <Card.Header>{data?.id}</Card.Header>
      <Card.Body>
        <Card.Text>{data?.content}</Card.Text>
      </Card.Body>
      <Card.Footer>Author: {data?.author}</Card.Footer>
    </div>
  );
};

export default ViewDetail;
