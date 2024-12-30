import React, { useState } from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PurchaseProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    // Collect and process purchase data
    alert(`Purchase confirmed for ${selectedProduct.name}`);
    closeModal();
  };

  return (
    <section className="xl:padding-l  wide:padding-r padding-b scroll-mt-11">
        <div className="pt-28">

        <h1 className="text-3xl font-bold mb-6 text-red-500">
        Purchase Products
      </h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => openModal(product)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Show
            </button>
          </div>
        ))}
      </div> */}


<div className="mt-16  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14  mr-11 ">
        {products.map((item, index) => (
          <div key={index}>
            <PopularProductCard imgURL={item.imgURL}
              name={item.name}
            price={item.price}
            />
            <button
              onClick={() => openModal(item)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Show
            </button>
          </div>
        ))}
      </div>
        </div>
    

      {isModalOpen && selectedProduct && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl transform transition-all scale-100">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        ✕
      </button>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Purchase Product
      </h2>
      <div className="flex justify-center mb-6">
        <img
          src={selectedProduct.imgURL}
          alt={selectedProduct.name}
          className="rounded-lg shadow-md w-40 h-40 object-cover"
        />
      </div>
      <form onSubmit={handlePurchase}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring focus:ring-red-300 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <input
            type="number"
            required
            className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring focus:ring-red-300 focus:outline-none"
            placeholder="Enter size (e.g., 8)"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            required
            className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring focus:ring-red-300 focus:outline-none"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shipping Address
          </label>
          <textarea
            required
            className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring focus:ring-red-300 focus:outline-none"
            rows="3"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div className="flex justify-between items-center gap-4">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:ring focus:ring-red-300 focus:outline-none transition-all"
          >
            Confirm Purchase
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:outline-none transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

  </section>
  );
};

export default PurchaseProducts;
