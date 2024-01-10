import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function RecentlyAdded() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "product"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-28 my-20">
      <div className="flex justify-between">
        <h2 className="text-3xl font-medium mb-3">Recently Added</h2>
      </div>
      <div className="flex overflow-scroll max-w-[100%]">
        {products
          .slice(-6)
          .map((product, index) => (
            <Link to={`/product-details?productId=${product?.id}`}>
              <Card key={index} product_details={product} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default RecentlyAdded;
