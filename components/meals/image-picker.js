"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handleClick = () => imageInput.current.click();

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(undefined);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => setPickedImage(fileReader.result);

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          //! multiple - dozvoli više fajlova
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
