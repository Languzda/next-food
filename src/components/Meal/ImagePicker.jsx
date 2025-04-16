"use client";
import { useRef, useState } from "react";

import classes from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleImagePick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}{" "}
          {pickedImage && <Image src={pickedImage} alt="preview" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
