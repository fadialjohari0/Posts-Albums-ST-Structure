import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { CommentService } from "./services";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import Ellipse from "../../assets/Ellipse.png";

import styles from "./comments.module.css";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const commentsData = await CommentService.list();

      const filteredComments = commentsData.filter(
        (comment) => comment.postId === Number(postId)
      );
      setComments(filteredComments);
      console.log(filteredComments);
    };
    fetchData();
  }, [postId]);

  return (
    <div className={styles.commentsMainContainer}>
      <Navbar />
      <Header title="Comments" />
      {comments.map((comment) => (
        <div className={styles.commentsContainer} key={comment.id}>
          <div className={styles.commentAuthorInfo}>
            <img src={Ellipse} alt="profile picture" />
            <h3 className={styles.commentAuthorName}>{comment.name}</h3>
          </div>
          <p className={styles.commentBody}>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
