import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import { Header } from "../../components/header";
import { AlbumService } from "./services";
import { UserContext } from "../../context";

import styles from "./albums.module.css";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const [albumsData] = await new Promise((resolve, reject) => {
        AlbumService.list()
          .then((data) => resolve([data]))
          .catch((error) => reject(error));
      });

      const userAlbums = albumsData.filter(
        (item) => item.userId === currentUser?.id
      );

      setAlbums(userAlbums);
    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <div className={styles.albumsMainContainer}>
      <Navbar />

      <Header title="Albums" />
      <div className={styles.titlesContainer}>
        {albums.map((album) => (
          <Link
            className={styles.title}
            key={album.id}
            to={`/albums/${album.id}`}
          >
            {album.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
