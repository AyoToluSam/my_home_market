import { useState } from 'react';
import { useForm } from "react-hook-form";
import {SellWrapper} from './sellProductStyles'

const SellProduct = () => {

  const [image, setImage] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = (event) => {
    console.log(event);
  };

  return (
    <SellWrapper>
      <h1>Sell a Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>*This field is required</span>}

        <label htmlFor="description">Description</label>
        <textarea {...register("description", { required: true })} />
        {errors.description && <span>*This field is required</span>}

        <label htmlFor="condition">Condition</label>
        <select {...register("condition", { required: true })}>
          <option value="">Select a condition</option>
          <option value="new">New</option>
          <option value="used-like-new">Used (like new)</option>
          <option value="fairly-used">Used (fairly)</option>
          <option value="in-good-condition">Old (but in perfect condition)</option>
        </select>
        {errors.condition && <span>*This field is required</span>}

        <label htmlFor="price">Price</label>
        <input type="number" {...register("price", { required: true, min: 0 })} />
        {errors.price && errors.price.type === "required" && <span>*This field is required</span>}
        {errors.price && errors.price.type === "min" && <span>Price must be greater than or equal to 0</span>}

        <label htmlFor="location">Location</label>
        <input {...register("location", { required: true })} />
        {errors.location && <span>*This field is required</span>}

        <label htmlFor="contact">Contact</label>
        <input {...register("contact", { required: true })} />
        {errors.contact && <span>*This field is required</span>}

        <label htmlFor="image">Image</label>
        <input type="file" accept="image/*" {...register("image", {
            validate: {
              lessThan10MB: files => files[0]?.size < 10000000 || 'Max 10MB',
              acceptedFormats: files =>
                ['image/jpeg', 'image/png'].includes(
                  files[0]?.type
                ) || 'Only PNG, JPEG e',
            },
          })} />
        {errors.image && <span>*Choose a jpg or png image less than 10MB</span>}

        <button type="submit">Submit</button>
    </form>
    </SellWrapper>
  );
}

export default SellProduct