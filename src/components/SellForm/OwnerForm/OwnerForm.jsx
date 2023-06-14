const OwnerForm = ({
  register,
  errors,
  banks,
  validateAccount,
  validateEmail,
}) => {
  return (
    <div className="owner-details">
      <div className="input">
        <label htmlFor="fullName">Full Name</label>
        <input {...register("fullName", { required: true })} />
        {errors.fullName && <span>*Enter your full name</span>}
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          {...register("email", {
            required: true,
            pattern: {
              value: /^\S+@\S+$/i,
              message: "*Invalid email format",
            },
          })}
        />
        {errors.email && <span>*Enter your email</span>}
      </div>

      <div className="input">
        <label htmlFor="emailConfirmation">Confirm email</label>
        <input
          type={"email"}
          {...register("emailConfirmation", {
            required: true,
            validate: validateEmail,
          })}
        />
        {errors.emailConfirmation && <span>*Enter a matching email</span>}
      </div>

      <div className="input">
        <label htmlFor="phone">Phone Number</label>
        <input
          {...register("phone", {
            required: true,
            pattern: {
              value: /^(0|\+234)[789][01]\d{8}$/,
              message: "Invalid phone number",
            },
            minLength: {
              value: 11,
              message: "Incomplete phone number",
            },
          })}
        />
        {errors.phone && <span>*Enter a valid phone number</span>}
      </div>

      <div className="input">
        <label htmlFor="bank">Bank</label>
        <input list="bank" {...register("bank", { required: true })} />
        <datalist id="bank">
          {banks.map((bank) => (
            <option key={bank.id} value={bank.name}>
              {bank.name}
            </option>
          ))}
        </datalist>
        {errors.bank && <span>*Enter your bank name</span>}
      </div>

      <div className="input">
        <label htmlFor="accountNo">Account Number</label>
        <input
          {...register("accountNo", {
            required: true,
            validate: validateAccount,
          })}
        />
        {errors.accountNo && <span>*Enter a valid account number</span>}
      </div>
    </div>
  );
};

export default OwnerForm;
