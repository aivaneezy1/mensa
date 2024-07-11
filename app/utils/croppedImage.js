import React from "react";

export const getCroppedImg = async () => {
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
