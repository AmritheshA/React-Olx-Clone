// ProductForm.js
import React,{useState} from "react";

const ProductForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form>
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
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product name"
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
            id="productName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product name"
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
            id="productName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter product name"
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
              className="mt-1 p-2 w-full border rounded-md mb-2"
              placeholder={`Enter basic detail ${index}`}
            />
          ))}
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDetails"
            className="block text-sm font-medium text-gray-600"
          >
            OverView
          </label>
          {[1, 2].map((index) => (
            <input
              key={index}
              type="text"
              id={`basicDetails${index}`}
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
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="productImage"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleImageChange}
          />
          {image && (
            <div className="mt-2">
              <img
                src={image}
                alt="Product Preview"
                className="max-w-full h-[200px]"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
