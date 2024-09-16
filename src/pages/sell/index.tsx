import { SellWrapper, SellBody } from "../../styles/sell/styles";
import SellForm from "@/components/SellForm/SellForm";
import Banner from "@/components/Banner/Banner";

const Sell = () => {
  return (
    <SellWrapper>
      <Banner />
      <SellBody>
        <div className="background">
          <h3>Sell a Product</h3>
          <p>Provide the following information to continue.</p>
          <SellForm />
        </div>
      </SellBody>
    </SellWrapper>
  );
};

export default Sell;
