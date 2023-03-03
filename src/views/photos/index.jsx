import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Header } from "../../components/header";
import { PhotoService } from "../albums/services";
import { Navbar } from "../../components/navbar/navbar";

import styles from "./photos.module.css";

const AlbumPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const albumId = Number(useParams().albumId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photosData = await PhotoService.list();

        const filteredPhotos = photosData.filter(
          (photo) => photo.albumId === albumId
        );

        setPhotos(filteredPhotos);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [albumId]);

  return (
    <div className={styles.photosMainContainer}>
      <Navbar />
      <Header title="Photos" />
      <div className={styles.photosContainer}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <p className={styles.cardTitle}>{photo.title}</p>
            <img className={styles.cardImage} src={photo.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
