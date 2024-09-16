import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import {
  Banner,
  Category,
  MarketBody,
  MarketContainer,
  MarketHeader,
  SearchGroup,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Market = () => {
  const router = useRouter();
  const queries = router.query;

  const categories = [
    "All Categories",
    "Electronics",
    "Furniture",
    "Kitchen Ware",
    "Accessories",
  ];

  const handleFilterChange = (category: string) => {
    const updatedQueries = { ...queries };

    if (category) {
      updatedQueries.category = category;
    } else {
      delete updatedQueries.category;
    }

    router.replace(
      {
        pathname: "/market",
        query: updatedQueries,
      },
      undefined,
      { shallow: true }
    );
  };

  const [search, setSearch] = useState("");

  return (
    <MarketContainer>
      <Banner>
        <div className="sales">
          <h3>Shop Home Equipment & Accessories</h3>
          <p>
            Flash sales with 15% off between 16<sup>th</sup> July and 21
            <sup>st</sup> July.
          </p>
          <button>Shop Now</button>
        </div>
        <img src="/marketbanner.webp" alt="" />
      </Banner>
      <MarketBody>
        <MarketHeader>
          <Category>
            {categories.map((c) => (
              <li
                key={c}
                onClick={() =>
                  handleFilterChange(c === "All Categories" ? "" : c)
                }
                className={
                  c === queries.category ||
                  (!queries.category && c === "All Categories")
                    ? "active"
                    : ""
                }
              >
                {c}
              </li>
            ))}
          </Category>
          <SearchGroup>
            {search ? (
              <MdClose className="search" onClick={() => setSearch("")} />
            ) : (
              <BiSearch className="search" />
            )}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What are you looking for?"
            />
          </SearchGroup>
        </MarketHeader>
        <ProductList search={search} />
      </MarketBody>
    </MarketContainer>
  );
};

export default Market;
