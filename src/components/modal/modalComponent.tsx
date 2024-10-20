"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}
interface IBlog {
  title: string;
  author: string;
  content: string;
}
function ModalComponent(props: IProps) {
  const { showModal, setShowModal } = props;
  const [formInput, setFormInput] = useState<IBlog>({
    title: "",
    author: "",
    content: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const { title, author, content } = formInput;
    if (!title) {
      toast.error("Not empty title!");
      return;
    }
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Create new blog Success!");
        setShowModal(false);
        mutate("http://localhost:8000/blogs");
      } else {
        toast.error("Failed to create new blog!");
      }
    });
  };
  const handleCloseModal = () => {
    setFormInput({
      title: "",
      author: "",
      content: "",
    });
    setShowModal(false);
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="title"
                value={formInput.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="author"
                value={formInput.author}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={formInput.content}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
