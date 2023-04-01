import React from 'react'
import UploadWidget from '@/components/UploadWidget/UploadWidget'
import Script from 'next/script';


const ProductForm = ({
  register,
  errors,
  imageUrl,
  setImageUrl,
  validateImage,
}) => {
  return (
    <>
      <label htmlFor="name">Name of Product</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>*This field is required</span>}

      <label htmlFor="description">Description</label>
      <textarea {...register("description", { required: true })} />
      {errors.description && <span>*This field is required</span>}

      <label htmlFor="condition">Condition</label>
      <select {...register("condition", { required: true })}>
        <option value="">Select a condition</option>
        <option value="New">New</option>
        <option value="Used-like-new">Used (like new)</option>
        <option value="Fairly-used">Used (fairly)</option>
        <option value="In-good-condition">
          Old (but in perfect condition)
        </option>
      </select>
      {errors.condition && <span>*This field is required</span>}

      <label htmlFor="price">Price</label>
      <input type="number" {...register("price", { required: true, min: 0 })} />
      {errors.price && errors.price.type === "required" && (
        <span>*This field is required</span>
      )}
      {errors.price && errors.price.type === "min" && (
        <span>Price must be greater than or equal to 0</span>
      )}

      <label htmlFor="location">Location</label>
      <input {...register("location", { required: true })} />
      {errors.location && <span>*This field is required</span>}
      
      <UploadWidget setImageUrl={setImageUrl} imageUrl={imageUrl} />
      <label htmlFor="image">Image</label>
      <input
        value={imageUrl}
        {...register("image", {
          required: true,
          validate: validateImage,
        })}
      />
      {!imageUrl && 
      <span>*Upload an image of the product. (Less than 10MB)</span>}
    </>
  );
};

export default ProductForm