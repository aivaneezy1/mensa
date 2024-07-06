"use client"
import  { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cropper from "react-easy-crop";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
const Upload = (props) => {
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     props.setSelectedImage(imageUrl);
  //     // Reset the input value to null to allow the same file to be selected again
  //     if (inputRef.current) {
  //       inputRef.current.value = null;
  //     }
  //   }

  const selectedFilePopup = () => {
    inputRef.current.click();
  };

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    console.log("pixels", croppedAreaPixels);
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    const file = event.target.files;
    if (file && file.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
        handleOpen(); // opening the modal when user select a file
      });
    }
  };

  const getCroppedImg = async () => {
    if (!image || !croppedArea) return;

    const imageElement = document.createElement("img");
    imageElement.src = image;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    canvas.width = croppedArea.width;
    canvas.height = croppedArea.height;

    ctx.save();
    ctx.translate(croppedArea.width / 2, croppedArea.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-croppedArea.width / 2, -croppedArea.height / 2);
    ctx.drawImage(
      imageElement,
      croppedArea.x * scaleX,
      croppedArea.y * scaleY,
      croppedArea.width * scaleX,
      croppedArea.height * scaleY,
      0,
      0,
      croppedArea.width,
      croppedArea.height
    );
    ctx.restore();

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        const croppedUrl = URL.createObjectURL(blob);
        resolve(croppedUrl);
      }, "image/jpeg");
    });
  };

  const handleShowCroppedImage = async () => {
    const croppedImageUrl = await getCroppedImg();
    setCroppedImage(croppedImageUrl);
    props.setSelectedImage(croppedImageUrl);
    handleClose(); // closing the modal when user select a file
  };

  const rotateLeft = () => setRotation((prev) => (prev - 90) % 360);




  return (
    <div>
      <div className=" relative flex flex-col bg-transparent border mt-2 py-5 rounded-md hover:border-blue-500 h-full w-full ">
        <label className="flex flex-col justify-center gap-1 items-center bg-transparent p-4 text-2xl text-gray-600 cursor-pointer whitespace-nowrap ">
          {props.selectedImage ? (
            <>
              <input
                type="file"
                className="hidden"
                ref={inputRef}
                onChange={onSelectFile}
              />
              <button onClick={selectedFilePopup}  className="h-full w-full">
              <Image
                className="object-cover rounded-md "
                src={props.selectedImage}
                alt="p"
                width={150}  // Adjust these values as needed
                height={150} // Adjust these values as needed
              />
              </button>
            </>
          ) : (
            <>
              <input
                type="file"
                className="hidden"
                onChange={onSelectFile}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              Carica una foto
            </>
          )}
        </label>
      </div>


       <Modal open={open} onClose={handleClose}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-md shadow-lg">
          {image && (
            <div className="flex flex-col items-center">
              <div className="w-80 h-80 overflow-hidden relative">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  rotation={rotation}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  className="w-full h-full"
                />
              </div>
              <Box sx={{ width: 300, mt: 2 }}>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(e, zoom) => setZoom(zoom)}
                  color="secondary"
                />
              </Box>
              <div className="flex mt-2 space-x-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={rotateLeft}
                >
                  Rotate
                </button>

                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={selectedFilePopup}
                >
                  New
                </button>
              </div>
              <button
                className="px-4 py-2 mt-3 bg-blue-500 rounded-md text-white hover:bg-blue-700"
                onClick={handleShowCroppedImage}
              >
                Conferma
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Upload;
