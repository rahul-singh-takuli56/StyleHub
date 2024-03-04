import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import Products from "../components/Products";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setproducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setproducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
