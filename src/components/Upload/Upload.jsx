import React, { useState, useEffect } from "react";
import { TbCloudUpload } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Uploaded, Click } from "./UploadStyles";

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const handleBrowseFiles = (event) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];
    const file = event.target.files[0];
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
    if (file && file.size <= 2 * 1024 * 1024) {
      setUploadedFile(file);
    } else {
      setErrMsg("Maximum file size is 2MB.");
    }
  };

  useEffect(() => {}, [uploadedFile]);

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
