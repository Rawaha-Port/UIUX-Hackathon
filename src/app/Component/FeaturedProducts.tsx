import React from 'react';

const products = [
  {
    id: 1,
    name: "Rustic Vase Set",
    price: "£155",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "The Silky Vase",
    price: "£125",
    imageUrl: "public\image 1.jpg",
  },
  {
    id: 3,
    name: "The Lucy Lamp",
    price: "£399",
    imageUrl: "/path/to/image3.jpg",
  },
  {
    id: 4,
    name: "The Dandy Chair",
    price: "£250",
    imageUrl: "/path/to/image4.jpg",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="relative flex flex-col items-start gap-6 w-full sm:w-[305px] sm:h-[462px]">
      <div className="w-full sm:h-[375px] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        ></div>
        <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-2 w-full bg-white bg-opacity-70">
          <h4 className="text-[#2A254B] text-[16px] sm:text-[20px] font-display">{product.name}</h4>
          <span className="text-[#2A254B] text-[14px] sm:text-[18px] font-satoshi">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center relative py-6 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View Collection Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-4 bg-[#F9F9F9] sm:w-[170px] sm:h-[56px] w-[140px] h-[48px]">
        <button className="text-[#2A254B] text-[14px] sm:text-[16px] font-satoshi">View Collection</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
