import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PostService } from "./services";
import { UserContext } from "../../context";
import { Header } from "../../components";
import Ellipse from "../../assets/Ellipse.png";

import styles from "./posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(UserContext);

  const name = currentUser?.name;
  const username = currentUser?.username;

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
      <Link className={styles.changeToAlbums} to={`/albums`}>
        My Albums
      </Link>

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
            <p className={styles.postBody}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
