import React from "react";
import { TbCloudUpload } from "react-icons/tb";
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
  return uploadedFile ? (
    <Uploaded>
      <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" />
      <button onClick={() => setUploadedFile(null)}>
        Delete and re-upload
      </button>
    </Uploaded>
  ) : (
    <Click>
      <p>Upload picture of item</p>
      <img src="" alt="" />
      <div className="upload" onDragOver={handleDragOver} onDrop={handleDrop}>
        <input
          type="file"
          id="file-input"
          onChange={handleBrowseFiles}
          style={{ display: "none" }}
        />
        <label htmlFor="file-input" className="btn-main">
          <img src="/upload-pic.png" alt="" />
          <div>
            <span>
              <TbCloudUpload /> Click to upload
            </span>
            <p className="file-info">
              Accepted file type: jpeg, png, svg, webp.
            </p>
            <p className="file-info">Maximum file size is 2MB.</p>
          </div>
        </label>
      </div>
    </Click>
  );
};

export default Upload;
