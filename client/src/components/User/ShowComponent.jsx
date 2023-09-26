import React, { useState, useEffect } from "react";
import postService from "../../services/postService";

function ShowComponent() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    setPosts(await postService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <p>Hello semicolon;</p>
      {posts.data !== undefined && posts.data.data.length > 0 && (
        <table style={{ width: "100%" }} border="1">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
          </thead>
          <tbody>
            {posts.data.data.map((post) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <img src={'http://localhost:8000/api/images/' + post.image} alt="" style={{width:'100px',height:'100px'}}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowComponent;
