import React, { useEffect } from "react";
import { TbCloudUpload } from "react-icons/tb";
import { Uploaded, Click } from "./UploadStyles";
import { useFileUpload } from "@/hooks/useFileUpload";
import { FieldValues, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { MdDeleteOutline } from "react-icons/md";

type UploadProps = {
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const Upload = ({ setValue }: UploadProps) => {
  const {
    handleBrowseFiles,
    handleDragOver,
    handleDrop,
    uploadedFile,
    setUploadedFile,
    errMsg,
  } = useFileUpload({ fileName: "sell-item-image" });

  useEffect(() => {
    setValue("itemImage", uploadedFile instanceof File ? uploadedFile : null);
  }, [uploadedFile]);

  return (
    <>
      <p className="upload-title">
        Product Image<span>*</span>
      </p>
      <Click>
        {uploadedFile ? (
          <Uploaded>
            <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" />
            <button onClick={() => setUploadedFile(null)}>
              <MdDeleteOutline size={16} /> Remove and re-upload
            </button>
          </Uploaded>
        ) : (
          <div
            className="upload"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src="/upload-pic.png" alt="" />
            <input
              type="file"
              id="file-input"
              onChange={handleBrowseFiles}
              style={{ display: "none" }}
            />
            <label htmlFor="file-input">
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
            {errMsg ? (
              <span className="file-error">{errMsg}</span>
            ) : (
              <span className="file-info">Maximum file size is 2MB.</span>
            )}
          </div>
        )}
      </Click>
    </>
  );
};

export default Upload;
