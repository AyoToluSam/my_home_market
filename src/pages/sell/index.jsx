import { useForm } from "react-hook-form";
import {SellWrapper, BlurBackground, Loading, Container} from './sellStyles'
import { useRouter } from 'next/router';
import { useState } from "react";
import Link from "next/link";


const Sell = () => {

  const router = useRouter()

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [productID, setProductID] = useState();

  const imgUrl = "https://via.placeholder.com/300x200.png?text="

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    setLoading(true);
    setOpen(true);

    const newData = {...data, image: imgUrl + data.name.replaceAll(" ", "+")}

    try {
      const response = await fetch('https://63f78f6ee8a73b486afaedef.mockapi.io/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      }).then( response => response.json()).then( data => {
        setProductID(data.id);
        setLoading(false);
      });
  
      if (!response) {
        throw new Error('Failed to submit form data');
      }
  
    } catch (error) {
      console.error(error);
      setError('submit', { message: 'Failed to submit form data' });
    }
  };

  return (
    <>
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
      { open &&
        <BlurBackground>
          { loading &&
            <Loading>
              <img src="/Spinner-1.3s-200px.gif" alt="Loading" />
            </Loading>
          }
          { (open && !loading) &&
            <Container>
              <h2>Success!</h2>
              <p>Product has been added to the market.</p>
              <Link href={`/market/product/${productID}`}><button>View Product</button></Link>
            </Container>
          }
        </BlurBackground>
      }
    </>
  );
}

export default Sell