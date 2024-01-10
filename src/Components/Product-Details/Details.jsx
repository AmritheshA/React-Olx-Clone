import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { database } from "../../firebaseConfig";
import { collection, getDoc,doc } from "firebase/firestore";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import Navbar from "../Headers/Navbar";

const Details = () => {
  const [products, setProducts] = useState();

  const queryString = window.location.search;

  const searchParams = new URLSearchParams(queryString);

  const productId = searchParams.get("productId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specificDocRef = doc(database, "product", productId);

        const docSnapshot = await getDoc(specificDocRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setProducts(data);
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const images = [products?.imageUrl];
  console.log("Type of images", typeof images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-100">
        <div className="flex justify-center h-full relative">
          <div className="w-2/3 bg-black flex justify-center h-[450px] mt-5 relative">
            <button
              className="text-white absolute text-4xl left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePrevClick}
            >
              <FaChevronLeft />
            </button>
            <div className="flex justify-center overflow-scroll">
              {images?.map((image, index) => (
                <img
                  key={index}
                  className={`h-full ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                  src={image}
                  alt={`car-${index}`}
                />
              ))}
            </div>
            <button className="text-white absolute text-3xl right-3 top-4">
              <FaHeart />
            </button>

            <button className="text-white absolute text-3xl mr-12 right-6 top-4">
              <FaShare />
            </button>

            <button
              className="text-white absolute text-4xl right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextClick}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="  h-[700px] w-[62%]">
            <div className="flex w-full justify-between h-[200px]">
              <div className="bg-white w-[63%] h-2/3 rounded m-5 shadow-md">
                <h1 className="font-bold text-3xl m-4">
                  {products?.productName}
                </h1>
                <h1 className="text-gray-600/80 m-4">
                  {products?.details[0]} | {products?.details[1]} |
                  {products?.details[2]}
                </h1>
                <h1 className="text-gray-600/80 m-4">
                  Category : {products?.categorie}
                </h1>
              </div>
              <div className="bg-white w-[35%] h-2/3 m-5 rounded shadow-md ">
                <h1 className="font-bold text-4xl m-3">
                  ₹ {products?.prize}
                </h1>
                <div className="flex justify-center">
                  <button className="border-2 border-black text-white rounded-lg w-[75%] h-11 bg-red-500">
                    Make Offer
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between h-[200px]">
              <div className="bg-white shadow-xl w-[63%] h-2/3 mx-5 rounded ">
                <h1 className="text-2xl font-semibold text-black/80 m-4">
                  OverView
                </h1>
                <h1 className="text-black/60 m-4 font-semibold">
                  {products?.overView[0]} | {products?.overView[1]}
                </h1>
              </div>
              {/* <div className="bg-white w-[35%] h-[85%] m-5 rounded">
                <div className="flex items-center m-4 border-2  ">
                  <img
                    src={products[0]?.imageUrl}
                    className="w-[65px] rounded-[100%]  h-[65px]"
                  ></img>
                  <h1 className="text-lg font-semibold ml-4">Shoukath</h1>
                </div>
                <div className="flex justify-center">
                  <button className="border-2 border-black text-white rounded-lg w-[75%] h-11 bg-violet-950">
                    Chat With Seller
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Details;
