import {
  SellWrapper,
  SellBody,
  Loading,
  Container,
} from "../../styles/sellStyles";
import { useState } from "react";
import Link from "next/link";
import SellForm from "@/components/SellForm/SellForm";
import Modal from "@/components/Modal/Modal";
import Banner from "@/components/Banner/Banner";

const Sell = () => {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [productID, setProductID] = useState();

  return (
    <>
      <SellWrapper>
        <Banner />
        <SellBody>
          <div className="background">
            <h3>Sell a Product</h3>
            <p>Provide the following information to continue.</p>
            <SellForm
              setProductID={setProductID}
              setLoading={setLoading}
              setOpen={setOpen}
            />
          </div>
        </SellBody>
      </SellWrapper>
      <Modal open={open} onClose={() => setOpen(!open)}>
        {loading && (
          <Loading>
            <img src="/Spinner.gif" alt="Loading" />
          </Loading>
        )}
        {open && !loading && (
          <Container>
            <h2>Success!</h2>
            <p>Your product has been added to the market.</p>
            <Link href={`/Market/product/${productID}`}>
              <button>View Product</button>
            </Link>
          </Container>
        )}
      </Modal>
    </>
  );
};

export default Sell;
