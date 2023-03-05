import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { PostService } from "./services";
import { UserContext } from "../../context";
import { Navbar } from "../../components/navbar";
import { Header } from "../../components/header";
import { AddPost } from "./addpost";

import Ellipse from "../../assets/Ellipse.png";
import styles from "./posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [textarea, setTextarea] = useState("");

  const { currentUser } = useContext(UserContext);

  const name = currentUser?.name;
  const username = currentUser?.username;

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Math.random(),
      body: textarea,
    };
    if (textarea === "") return;
    setPosts([newPost, ...posts]);
    setTextarea("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const [postsData] = await new Promise((resolve, reject) => {
        PostService.list()
          .then((data) => resolve([data]))
          .catch((error) => reject(error));
      });

      const filteredPosts = postsData.filter(
        (post) => post.userId === currentUser?.id
      );

      setPosts(filteredPosts);
    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <div className={styles.discoverMain}>
      <Navbar />
      <Header title="Posts" />
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <div className={styles.userInfo}>
              <img
                className={styles.userProfilePicture}
                src={Ellipse}
                alt="ellipse"
              />
              <div className={styles.userHandles}>
                <h3 className={styles.name}>{name}</h3>
                <h4 className={styles.username}>@{username}</h4>
              </div>
            </div>
            <Link className={styles.postBody} to={`/posts/${post.id}`}>
              {post.body}
            </Link>
          </div>
        ))}
        <AddPost
          setTextarea={setTextarea}
          textarea={textarea}
          handleNewPostSubmit={handleNewPostSubmit}
        />
      </div>
    </div>
  );
};

export default Posts;
