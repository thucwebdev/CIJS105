import React, { useState, useEffect } from "react";
import { products } from "../assets/assets";
import { useParams, Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p._id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image[0]);
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product not found
            </h2>
            <p className="text-gray-600">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            ← Quay lại trang chủ
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.image.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage === img
                        ? "border-gray-800"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl font-light text-gray-800">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-2xl font-semibold text-gray-900">
              ${(product.price / 1000).toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Size {selectedSize}
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-gray-800 bg-gray-800 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
                <button className="px-3 py-2 text-sm text-gray-500 underline hover:text-gray-700">
                  Clear
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gray-800 text-white py-3 px-6 hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span>ADD TO CART</span>
              </button>

              <div className="text-center text-sm text-gray-500">OR</div>

              <button className="w-full bg-gray-700 text-white py-3 px-6 hover:bg-gray-600 transition-colors">
                BUY NOW
              </button>
            </div>

            {/* Wishlist & Compare */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>

            {/* Payment Info */}
            <div className="border-t pt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                GUARANTEED SAFE CHECKOUT
              </p>
              <div className="flex justify-center items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    PP
                  </div>
                  <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                    AE
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    ME
                  </div>
                  <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    BC
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                Your Payment is 100% Secure
              </p>
            </div>

            {/* Product Meta */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex">
                <span className="font-medium text-gray-700 w-20">Brand:</span>
                <span className="text-gray-600">Brand 01</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20">SKU:</span>
                <span className="text-gray-600">
                  {product._id.padStart(5, "0")}
                </span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20">
                  Category:
                </span>
                <span className="text-gray-600">{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
