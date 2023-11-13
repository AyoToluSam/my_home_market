import Upload from "@/components/Upload/Upload";

const ProductForm = ({ register, errors, imageUrl, setImageUrl }) => {
  return (
    <div className="product-info">
      <div className="first-row">
        <div className="input">
          <label htmlFor="name">Product Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter product name"
          />
          {errors.name && <span>*This field is required</span>}
        </div>
        <div className="input">
          <label htmlFor="condition">Condition</label>
          <select
            {...register("condition", { required: true })}
            defaultValue={"select"}>
            <option value="select" disabled>
              Select condition
            </option>
            <option value="New">New</option>
            <option value="Used-like-new">Used (like new)</option>
            <option value="Fairly-used">Used (fairly)</option>
            <option value="In-good-condition">
              Old (but in perfect condition)
            </option>
          </select>
          {errors.condition && <span>*This field is required</span>}
        </div>
      </div>
      <div className="input">
        <label htmlFor="description"> Product Description</label>
        <textarea
          {...register("description", { required: true })}
          placeholder="Enter description"
        />
        {errors.description && <span>*This field is required</span>}
      </div>
      <div className="input">
        <label htmlFor="price">Amount</label>
        <input
          type="number"
          {...register("price", { required: true, min: 0 })}
          placeholder="Enter amount"
        />
        {errors.price && errors.price.type === "required" && (
          <span>*This field is required</span>
        )}
        {errors.price && errors.price.type === "min" && (
          <span>Price must be greater than or equal to 0</span>
        )}
      </div>
      <div className="input">
        <label htmlFor="location">Location</label>
        <input
          {...register("location", { required: true })}
          placeholder="Enter Location"
        />
        {errors.location && <span>*This field is required</span>}
      </div>
      <Upload setImageUrl={setImageUrl} imageUrl={imageUrl} />
    </div>
  );
};

export default ProductForm;
