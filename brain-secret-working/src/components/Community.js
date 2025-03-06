import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Community.css";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Fetch all posts from the backend
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/community/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = async () => {
    if (newPost.title && newPost.content) {
      const post = {
        username: "You", // Replace this with dynamic username handling
        title: newPost.title,
        content: newPost.content,
      };

      try {
        await axios.post("http://localhost:8080/api/community/create", post);
        fetchPosts(); // Refresh posts after submission
        setNewPost({ title: "", content: "" });
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  return (
    <div className="community-container">
      <h1 className=".community-h1">Community Page</h1>

      {/* Create Post Section */}
      <div className="create-post">
        <h2>Create a Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Post title"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Write your post here..."
          value={newPost.content}
          onChange={handleInputChange}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      {/* Posts Section */}
      <div className="posts-section">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="post-footer">
              <span>By {post.username}</span>
              <span>{new Date(post.timestamp).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;






// import React, { useState } from "react";
// import "../css/Community.css";

// const Community = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: "JohnDoe",
//       title: "How to overcome anxiety?",
//       content:
//         "I've been struggling with anxiety lately. Can anyone share tips or resources that have helped?",
//       timestamp: "2 hours ago",
//       likes: 10,
//       comments: 4,
//     },
//     {
//       id: 2,
//       username: "JaneSmith",
//       title: "Best books on mental health",
//       content:
//         "Can anyone recommend good books for understanding mental health and personal growth?",
//       timestamp: "5 hours ago",
//       likes: 7,
//       comments: 2,
//     },
//   ]);

//   const [newPost, setNewPost] = useState({ title: "", content: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handlePostSubmit = () => {
//     if (newPost.title && newPost.content) {
//       const post = {
//         id: posts.length + 1,
//         username: "You",
//         title: newPost.title,
//         content: newPost.content,
//         timestamp: "Just now",
//         likes: 0,
//         comments: 0,
//       };
//       setPosts([post, ...posts]);
//       setNewPost({ title: "", content: "" });
//     }
//   };

//   return (
//     <div className="community-container">
//       <h1 className=".community-h1">Community Page</h1>

//       {/* Create Post Section */}
//       <div className="create-post">
//         <h2>Create a Post</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Post title"
//           value={newPost.title}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="content"
//           placeholder="Write your post here..."
//           value={newPost.content}
//           onChange={handleInputChange}
//         />
//         <button onClick={handlePostSubmit}>Post</button>
//       </div>

//       {/* Search and Categories
//       <div className="community-options">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search posts..."
//         />
//         <div className="categories">
//           <button>All</button>
//           <button>Anxiety</button>
//           <button>Depression</button>
//           <button>Wellness</button>
//           <button>Relationships</button>
//         </div>
//       </div> */}

//       {/* Trending Topics */}
//       <div className="trending-section">
//         <h2>Trending Topics</h2>
//         <ul>
//           <li>How to cope with stress</li>
//           <li>Building healthy relationships</li>
//           <li>Mindfulness for beginners</li>
//         </ul>
//       </div>

//       {/* Posts Section */}
//       <div className="posts-section">
//         {posts.map((post) => (
//           <div key={post.id} className="post">
//             <h3>{post.title}</h3>
//             <p className="post-content">{post.content}</p>
//             <div className="post-footer">
//               <span>By {post.username}</span>
//               <span>{post.timestamp}</span>
//               <span>{post.likes} Likes</span>
//               <span>{post.comments} Comments</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Community;
