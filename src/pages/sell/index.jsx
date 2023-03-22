import {SellWrapper, BlurBackground, Loading, Container} from '../../styles/sellStyles';
import { useState } from "react";
import Link from "next/link";
import SellForm from "@/components/SellForm/SellForm";

const Sell = () => {

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [productID, setProductID] = useState();

  return (
    <>
      <SellWrapper>
        <h1>Sell a Product</h1>
        <SellForm 
        setProductID={setProductID}
        setLoading={setLoading}
        setOpen={setOpen}
        />
      </SellWrapper>
      { open &&
        <BlurBackground>
          { loading &&
            <Loading>
              <img src="/Spinner.gif" alt="Loading"/>
            </Loading>
          }
          { (open && !loading) &&
            <Container>
              <h2>Success!</h2>
              <p>Your product has been added to the market.</p>
              <Link href={`/Market/product/${productID}`}><button>View Product</button></Link>
            </Container>
          }
        </BlurBackground>
      }
    </>
  );
}

export default Sell;