

const OwnerForm = ({register, errors, banks, validateAccount, validateEmail}) => {


  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input {...register("fullName", { required: true })} />
      {errors.fullName && <span>*Enter your full name</span>}
      
      <label htmlFor="email">Email</label>
      <input 
      type={"email"}           
      {...register("email", {
        required: "*Email is required",
        pattern: {
        value: /^\S+@\S+$/i,
        message: "*Invalid email format"
        }
      })} />
      {errors.email && <span>*Enter your email</span>}
      
      <label htmlFor="emailConfirmation">Confirm email</label>
      <input 
      type={"email"}           
      {...register("emailConfirmation", {
        required: true,
        validate: validateEmail
      })} />
      {errors.emailConfirmation && <span>*Enter a matching email</span>}

      <label htmlFor="phone">Phone Number</label>
      <input 
      {...register("phone", {
        required: "*Please enter a +234 phone number",
        pattern: {
        value: /^[\+]?[2-4]{3}?[0-9]{10}$/,
        message: "Invalid phone number"
        },
        minLength: {
        value: 11,
        message: "Incomplete phone number"
        }
      })} />
      {errors.phone && <span>*This field is required</span>}

      <label htmlFor="bank">Bank</label>
      <input list="bank" {...register("bank", { required: true })} />
        <datalist id="bank" >
          {
            banks.map(bank => <option key={bank.id} value={bank.name}>{bank.name}</option>)
          }
        </datalist>
      {errors.bank && <span>*Enter your bank name</span>}

      <label htmlFor="accountNo">Account Number</label>
      <input {...register("accountNo", { required: true, validate: validateAccount })} />
      {errors.accountNo && <span>*Enter a valid account number</span>}
    </>
  )
}

export default OwnerForm