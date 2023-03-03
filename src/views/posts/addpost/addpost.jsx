import React, { useState } from "react";

import styles from "./addpost.module.css";

export const AddPost = ({ textarea, setTextarea, handleNewPostSubmit }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handlePostButtonClick = (event) => {
    event.preventDefault();
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className={styles.addPostContainer}>
      {isButtonClicked ? (
        <form className={styles.addPostForm}>
          <textarea
            className={styles.addPostTextArea}
            cols="40"
            rows="5"
            value={textarea}
            placeholder="What's on your mind?"
            onChange={(event) => {
              setTextarea(event.target.value);
            }}
          />
          <button
            onClick={handleNewPostSubmit}
            className={styles.postSubmitButton}
          >
            Post
          </button>
        </form>
      ) : null}
      <button onClick={handlePostButtonClick} className={styles.addPostButton}>
        +
      </button>
    </div>
  );
};
