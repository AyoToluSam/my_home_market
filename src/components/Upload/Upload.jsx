import React, { useState, useEffect } from "react";
import { TbCloudUpload } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Uploaded, Click } from "./UploadStyles";

const Upload = ({ setImageUrl, imageUrl }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const cloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "rp7fs59d");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dhyopp1tf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      const imageUrl = data.url;
      setImageUrl(imageUrl);
    } else {
      console.log(response.status);
    }
  };

  const uploader = (file) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];

    if (
      file &&
      allowedTypes.includes(file.type) &&
      file.size <= 2 * 1024 * 1024
    ) {
      setUploadedFile(file);
      setErrMsg("");
    } else if (!allowedTypes.includes(file.type)) {
      setErrMsg(
        "Invalid file type. Please select a jpg, png, webp or svg file"
      );
    } else if (file.size > 2 * 1024 * 1024) {
      setErrMsg("Maximum file size is 2MB.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    uploader(file);
  };

  const handleBrowseFiles = (event) => {
    const file = event.target.files[0];
    uploader(file);
  };

  useEffect(() => {
    if (uploadedFile) {
      cloudinary(uploadedFile);
    }
  }, [uploadedFile]);

  return uploadedFile ? (
    <Uploaded>
      <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" />
      <button onClick={() => setUploadedFile(null)}>
        <span>
          <RxCross2 />
        </span>{" "}
        Delete and re-upload
      </button>
    </Uploaded>
  ) : (
    <>
      <p>Upload a picture of the item</p>
      <Click>
        <div className="upload" onDragOver={handleDragOver} onDrop={handleDrop}>
          <img src="/upload-pic.png" alt="" />
          <input
            type="file"
            id="file-input"
            onChange={handleBrowseFiles}
            style={{ display: "none" }}
          />
          <label htmlFor="file-input" className="btn-main">
            <span>
              <TbCloudUpload />
            </span>{" "}
            Click here to upload
          </label>
          <p>OR</p>
          <p className="drag">Drag and drop your file.</p>
          <span className="file-info">
            Accepted file types: jpeg, png, svg, webp.
          </span>
          <span className="file-info">Maximum file size is 2MB.</span>
        </div>
      </Click>
    </>
  );
};

export default Upload;
