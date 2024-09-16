import { SetStateAction, useCallback, useMemo, useState } from "react";
import usePersistedState from "./usePersistedState";

type UseFileUploadProps = {
  allowedTypes?: string[];
  allowedSize?: number;
  fileName: string;
  persist?: boolean;
};

export const useFileUpload = ({
  allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
    "image/svg+xml",
    "application/pdf",
  ],
  allowedSize = 2, // In Megabytes(MB)
  fileName,
  persist = false,
}: UseFileUploadProps) => {
  const [progress, setProgress] = useState<number>(0);

  const [noPersistUploadedFile, setNoPersistUploadedFile] =
    useState<File | null>(null);

  const [persistedUploadedFile, setPersistedUploadedFile] =
    usePersistedState<File | null>({
      defaultValue: null,
      storageKey: `uploaded-file-${fileName}`,
    });

  const uploadedFile = useMemo(
    () => (persist ? persistedUploadedFile : noPersistUploadedFile),
    [persist, persistedUploadedFile, noPersistUploadedFile]
  );

  const setUploadedFile = useCallback(
    (value: SetStateAction<File | null>) =>
      persist
        ? setPersistedUploadedFile(value)
        : setNoPersistUploadedFile(value),
    [persist]
  );

  const [errMsg, setErrMsg] = useState("");

  const allowedSizeInBytes = allowedSize * 1024 * 1024;

  const handleUpload = (file: File) => {
    if (
      file &&
      allowedTypes.includes(file.type) &&
      file.size <= allowedSizeInBytes
    ) {
      setUploadedFile(file);
      setErrMsg("");
      setProgress(100);
    } else if (!allowedTypes.includes(file.type)) {
      setErrMsg("Invalid file type!");
      setUploadedFile(null);
    } else if (file.size > allowedSizeInBytes) {
      setErrMsg(`Maximum file size is ${allowedSize}MB.`);
      setUploadedFile(null);
    }
  };

  const handleBrowseFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const fileSize = file.size;
    let bytesUploaded = 0;

    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        bytesUploaded += event.loaded;
        const percentComplete = (bytesUploaded / fileSize) * 100;
        setProgress(percentComplete);
      }
    };

    reader.onloadend = () => {
      setProgress(100);
    };

    reader.readAsArrayBuffer(file);

    if (file) {
      handleUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  return {
    handleBrowseFiles,
    handleDragOver,
    handleDrop,
    uploadedFile,
    progress,
    setUploadedFile,
    errMsg,
  };
};
