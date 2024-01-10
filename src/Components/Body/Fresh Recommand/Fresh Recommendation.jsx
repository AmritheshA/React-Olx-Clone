import React, { useState, useEffect } from "react";
import Card from "../Card";
import {Link} from 'react-router-dom'
import { database } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Fresh_Recommendation() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "product"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  


  return (
    <div className="m-28">
      <div className="flex justify-between">
        <h2 className="text-3xl font-medium mb-3">Fresh Recommendations</h2>
        <h2 className="text-lg font-semibold underline mb-3">View More</h2>
      </div>
      <div className="flex flex-wrap max-w-[100%]">
        {products.map((product, index) => {
          return (
            <Link to={`/product-details?productId=${product?.id}`}>
              <Card key={index} product_details={product} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center mt-20">
        <button className="border-2 border-black rounded w-[125px] h-[50px]">
          View More
        </button>
      </div>
    </div>
  );
}

export default Fresh_Recommendation;
