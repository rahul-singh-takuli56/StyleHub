import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  // console.log(products);

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white p-2 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="text-gray-600  w-[700px] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed impedit
          praesentium deserunt neque, odit sunt illum provident iste labore
          exercitationem consequuntur quam vero voluptatibus eos minus atque
          placeat recusandae. Hic.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-4">
        {products?.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
