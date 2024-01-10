// ProductForm.js
import React, { useState } from "react";
import { database, storage } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserAuthConsumer } from "../../Global-Context/AuthContext";
import { BiLogoHeroku } from "react-icons/bi";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [prize, setPrize] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([]);
  const [overView, setOverView] = useState([]);
  const [image, setImage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [imagePre, setImagePre] = useState(null);

  const { user } = UserAuthConsumer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!image) {
        throw new Error("Please select an image.");
      }

      const storageRef = ref(storage, `/product-image/${image?.name}`);

      const snapshot = await uploadBytes(storageRef, image);

      const url = await getDownloadURL(storageRef);
      
      setImage(url);

      await addDoc(collection(database, "product"), {
        productName,
        prize,
        categorie,
        details,
        overView,
        description,
        imageUrl: url,
        userId: user.uid,
        featured: isChecked,
      });

      alert("product added");
    } catch (error) {
      console.error("Error submitting product:", error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePre(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  function handleFeature(eve) {
    setIsChecked(eve.target.checked);
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-600"
          >
            Name of the product
          </label>
          <input
            type="text"
            id="productName"
            onChange={(eve) => {
              setProductName(eve.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-gray-600"
          >
            Name of the product
          </label>
          <input
            type="text"
            id="Description"
            onChange={(eve) => {
              setDescription(eve.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product Description"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-600"
          >
            Prize of the product
          </label>
          <input
            type="text"
            id="Prize"
            onChange={(eve) => {
              setPrize(eve.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product prize"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-600"
          >
            Categorie of the product
          </label>
          <input
            type="text"
            id="Categories"
            onChange={(eve) => {
              setCategorie(eve.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product categorie"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productDetails"
            className="block text-sm font-medium text-gray-600"
          >
            Basic details
          </label>
          {[1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              id={`basicDetails${index}`}
              onChange={(eve) => {
                setDetails((prevDetails) => {
                  const newDetails = [...prevDetails];
                  newDetails[index - 1] = eve.target.value;
                  return newDetails;
                });
              }}
              className="mt-1 p-2 w-full border rounded-md mb-2"
              placeholder={`Enter basic detail ${index}`}
            />
          ))}
        </div>
        <div className="mb-4">
          <label
            htmlFor="overView"
            className="block text-sm font-medium text-gray-600"
          >
            OverView
          </label>
          {[1, 2].map((index) => (
            <input
              key={index}
              type="text"
              id={`basicDetails${index}`}
              onChange={(eve) => {
                setOverView((prevDetails) => {
                  const newDetails = [...prevDetails];
                  newDetails[index - 1] = eve.target.value;
                  return newDetails;
                });
              }}
              className="mt-1 p-2 w-full border rounded-md mb-2"
              placeholder={`Enter basic detail ${index}`}
            />
          ))}
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-600"
          >
            Is Featured
          </label>
          <input
            type="checkbox"
            accept="image/*"
            id="productImage"
            className="h-[25px] w-[25px] mt-5 border rounded-md"
            onChange={handleFeature}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-600"
          >
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="productImage"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleImageChange}
          />
          {imagePre && (
            <div className="mt-2">
              <img
                src={imagePre}
                alt="Product Preview"
                className="max-w-full h-[200px]"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
