const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const CLOUDINARY_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

type UploadToCloudinaryProps = {
  fileType: "image" | "video" | "pdf" | "doc";
  file: File;
};

export const uploadToCloudinary = async ({
  fileType,
  file,
}: UploadToCloudinaryProps) => {
  let fileUrl;

  const resourceType =
    fileType === "image"
      ? "image"
      : fileType === "video"
        ? "video"
        : fileType === "doc" || fileType === "pdf"
          ? "raw"
          : "auto";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET as string);
  formData.append("secure", "true");

  const response = await fetch(
    `${CLOUDINARY_BASE_URL}/${CLOUDINARY_NAME}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    const data = await response.json();
    fileUrl = data.secure_url;
  }

  return fileUrl;
};
