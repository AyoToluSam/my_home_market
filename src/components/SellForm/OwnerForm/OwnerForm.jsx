import React from 'react'

const OwnerForm = ({register, errors}) => {
  return (
    <>      
      <label htmlFor="fullName">Full Name</label>
      <input {...register("fullName", { required: true })} />
      {errors.fullName && <span>*This field is required</span>}
      
      <label htmlFor="email">Email</label>
      <input {...register("email", { required: true })} />
      {errors.email && <span>*This field is required</span>}

      <label htmlFor="phone">Phone Number</label>
      <input {...register("phone", { required: true })} />
      {errors.phone && <span>*This field is required</span>}

      <label htmlFor="accountNo">Account Number</label>
      <input {...register("accountNo", { required: true })} />
      {errors.accountNo && <span>*This field is required</span>}

      <label htmlFor="bank">Bank</label>
      <input {...register("bank", { required: true })} />
      {errors.bank && <span>*This field is required</span>}
    </>
  )
}

export default OwnerForm