import React from 'react'
import { Container, Search } from './HomePageStyles'
import {BiSearch} from 'react-icons/bi'
import { useCart } from '@/contexts/CartContext'

const HomePage = () => {

  const {products} = useCart()

  return (
    <Container>
      <h1>Welcome to My Home Market.</h1>
      <p>Your buying and selling stop for home equipment and appliances.</p>
      <Search>
        <input type="text" placeholder='I am looking for...' />
        <BiSearch className='search' />
      </Search>
      <h2>How we operate</h2>
      <p>We have a smooth and user friendly operating standard, enumerated in steps below:</p>
      <ul>
        <li>Seller......</li>
        <li>Buyer.....</li>
        <li>Order processing.....</li>
        <li>Inspection.....</li>
        <li>Pickup or Delivery.....</li>
      </ul>
      <button>Start shopping</button>
      <h2>Frequently asked questions</h2>
      <ul>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
    </Container>
  )
}

export default HomePage