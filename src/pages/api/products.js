import productsData from "../../data/productlist-data.json";

export default (req, res) => {
  res.json(productsData);
};