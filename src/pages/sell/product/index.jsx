import { useState } from 'react';
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { BlurBackground, Container} from './productStyles'

const Product = () => {

  const product = JSON.parse(localStorage.getItem("product"));

  const [open, setOpen] = useState(true);

  return (
    <>
      <ProductDetail product={product} />
      { open &&
        <BlurBackground>
          <Container>
            <h2>Success!</h2>
            <p>Product has been added to the market.</p>
            <button onClick={() => setOpen(false)}>Ok</button>
          </Container>
        </BlurBackground>
      }
    </>
  );
}

export default Product