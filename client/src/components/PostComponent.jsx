import React, { useState } from "react";
import postService from "../services/postService";

export default function PostComponent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("date", date);
    formData.append("image", image);

    const result = await postService.createPost(formData);

    if (result.data.success === true) {
      setMessage("Post created successfully");
    } else {
      setMessage("Error while creating post !!");
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
    event.target.reset();
  };

  return (
    <div>
      <p>semicolon;</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Please title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <br />
        <input
          type="date"
          name="date"
          onChange={(event) => setDate(event.target.value)}
          required
        />

        <br />
        <input
          type="file"
          name="image"
          onChange={(event) => setImage(event.target.files[0])}
          required
        />
        <br />
        <button>Submit</button>
      </form>

      <div className="alert alert-primary" role="alert">
        <p>{message}</p>
      </div>
    </div>
  );
}
