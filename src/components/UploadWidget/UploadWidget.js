import {useEffect, useRef} from 'react'
import { MdOutlineFileUpload } from 'react-icons/md';
import { Upload } from './UploadWidgetStyles';


const UploadWidget = ({setImageUrl, imageUrl}) => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget({
      cloudName: "dhyopp1tf",
      uploadPreset: "rp7fs59d",
    }, function(error, result) {
      console.log(result.info);
      if (!error && result && result.event === "success") {
        setImageUrl(result.info.secure_url);
        console.log(imageUrl);
      }
    })
  }, [])

  return (
    <Upload onClick={() => widgetRef.current?.open()}>
      <MdOutlineFileUpload/>
      <h5>Upload Image</h5>
    </Upload>
  )
}

export default UploadWidget