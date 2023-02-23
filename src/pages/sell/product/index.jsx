import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import {BlurBackground, SuccessAlert, Container} from './productStyles'

const Product = () => {

  const product = JSON.parse(localStorage.getItem("product"));

  return (
    <>
      <Popup>
        <Container>
          <h2>Success!</h2>
          <p>Product has been added to the market.</p>
        </Container>
      </Popup>
      {/* <ProductDetail product={product} /> */}
    </>
  );
}

export default Product