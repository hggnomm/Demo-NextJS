"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ModalComponent from "../modal/modalComponent";
interface IProps {
  blogs: IBlog[];
}

const TableComponent = (props: IProps) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button onClick={() => setShowModal(true)} variant="secondary">Add New</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No </th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => {
            return (
              <tr>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant="warning" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default TableComponent;
