import React from "react";

const ViewDetail = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return <div>{params.id}</div>;
};

export default ViewDetail;
