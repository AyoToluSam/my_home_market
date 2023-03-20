import { useState, useEffect } from 'react';
import { useMultiStepForm } from "@/utilities/useMultiStepForm";
import { useForm } from "react-hook-form";
import { Form, NavTitles, NavButtons } from "./SellFormStyles";
import OwnerForm from "./OwnerForm/OwnerForm";
import ProductForm from "./ProductForm/ProductForm";


const SellForm = ({setProductID, setLoading, setOpen}) => {

  const [banks, setBanks] = useState()

  const getBanks = async () => {
    const res = await fetch("https://api.paystack.co/bank");
    const {data} = await res.json();
    setBanks(data);
  }

  useEffect(() => {
    getBanks();
  }, [])

  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid }, 
    getValues 
  } = useForm({mode: "all"});

  const validateEmail = (value) => {
    const {email} = getValues()
    if (value !== email) {
      return false;
    }
  };
  
  const validateAccount = async (account) => {

    const {bank} = getValues()

    const theBank = banks.find(findBank => findBank.name === bank)

    const res = await fetch(`https://api.paystack.co/bank/resolve?account_number=${account}&bank_code=${theBank.code}`, {
      headers: {
        "authorization": `Bearer ${process.env.secretKey}`
      }
    })
    const data = await res.json();

    if (!data.status) {
      return false
    }
  }

  const imgUrlTemplate = "https://via.placeholder.com/300x200.png?text=";

  const onSubmit = async (data) => {

    const newData = {
      name: data.name,
      price: data.price,
      image: imgUrlTemplate + data.name.replaceAll(" ", "+"),
      description: data.description,
      condition: data.condition,
      location: data.location,
      owner: {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        bank: data.bank,
        accountNo: data.accountNo
      }
    }
    
    setLoading(true);
    setOpen(true);

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
  }

  const formSteps = [
    <ProductForm key={"product"} register={register} errors={errors} />,
    <OwnerForm
      key={"owner"} 
      register={register} 
      errors={errors} 
      banks={banks} 
      validateAccount={validateAccount} 
      validateEmail={validateEmail}
    />
  ]

  const formTitles = [
    "Product Details",
    "Owner's Details"
  ]

  const { 
    step, 
    title, 
    currentStepIndex, 
    isFirstStep, 
    isLastStep, 
    back, 
    next,
    goTo 
  } = useMultiStepForm(formSteps, formTitles)

  return (
    <>
      <Form>
        <NavTitles>
          {
            formTitles.map( (formTitle, index) => {
              return <h3 
              key={index}
              className={ formTitle === title ? "active" : ""}
              onClick={() => {
                if (isValid) {
                  goTo(index)
                }
                else if (currentStepIndex > 0 && currentStepIndex > index) {
                  goTo(index)
                }
              }}
              > {formTitle} </h3> 
            })
          }
        </NavTitles>
        {step}
      </Form>
      <NavButtons>
        {!isFirstStep &&
          <button onClick={back}>Back</button>
        }
        {!isLastStep ?
          <button 
          disabled={!isValid} 
          onClick={next}>Next</button>
          : 
          <button 
          disabled={!isValid} 
          onClick={handleSubmit(onSubmit)} >Submit</button>
        }
      </NavButtons>
    </>
  )
}

export default SellForm;