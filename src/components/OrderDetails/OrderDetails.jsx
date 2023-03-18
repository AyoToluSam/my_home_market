import Link from 'next/link'
import { Wrapper } from './OrderDetailsStyles'

const OrderDetails = () => {
  return (
    <Wrapper>
      <h2>Thank you for your order!</h2>
      <p>A notification has been sent to the owner of the product
       and we will reach out to you via both a phone call and an email
       once we get a response from them. 
       <br />
       <br />
       Please read our Operation Model on getting your orders again 
       by clicking <Link href="">here</Link>.
      </p>
      <Link href="/market"><button>Continue Shopping</button></Link>
    </Wrapper>
  )
}

export default OrderDetails