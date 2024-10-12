'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';
const Facebook = () => {
    const router = useRouter()
  const handleBtn = () => {
    router.push("/")
  };
  return (
    <div>
      Facebook
      <div>
        <Button variant="primary" onClick={() => handleBtn()}>Back home</Button>
      </div>
    </div>
  );
};

export default Facebook;
