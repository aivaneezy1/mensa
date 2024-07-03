"use client";
import Cropper from "react-easy-crop";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
import { useRef, useState } from "react";
import { getCroppedImg } from "../utils/croppedImage";

const Page = () => {
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
        console.log(reader.result);
        setImage(reader.result);
        handleOpen();
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
    handleClose();
  };

  const rotateLeft = () => setRotation((prev) => (prev - 90) % 360);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onSelectFile}
      />
      <button
        className="px-5 py-3 bg-green-500 rounded-md text-white hover:bg-green-700"
        onClick={selectedFilePopup}
      >
        Choose
      </button>

      {croppedImage && (
        <div className="mt-5 flex items-center justify-center">
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}

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
             
              </div>
              <button
                className="px-5 py-3 mt-3 bg-blue-500 rounded-md text-white hover:bg-blue-700"
                onClick={handleShowCroppedImage}
              >
                Show Cropped Image
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Page;
