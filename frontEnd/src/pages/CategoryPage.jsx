import React, { useState } from "react";
import { useNavigate } from "react-router";

const CategoryPage = () => {
  const navigate = useNavigate();
  const categories = [
    {
      category: "Wedding",
      subCategory: ["Valima", "Furniture", "Jahez", "Valima Food"],
      maxLoan: "PKR 5 Lakh",
      LoanPeriod: "3 Years",
    },
    {
      category: "Home Construction",
      subCategory: ["Home Design", "Painting", "Wallpaper", "Home Improvement"],
      maxLoan: "PKR 10 Lakh",
      LoanPeriod: "5 Years",
    },
    {
      category: "Business Start Up",
      subCategory: ["Marketing", "Finance", "Management", "Operations"],
      maxLoan: "PKR 10 Lakh",
      LoanPeriod: "5 Years",
    },
    {
      category: "Education",
      subCategory: ["Language", "Science", "Mathematics", "Arts"],
      maxLoan: "10 Lakh",
      LoanPeriod: "5 years",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");

  const handleCategoryChange = (e) => {
    const selectedCategoryName = e.target.value;

    const selectedCategoryObject = categories.find(
      (category) => category.category === selectedCategoryName
    );

    if (selectedCategoryObject) {
      setSelectedCategory(selectedCategoryName);
      setLoanAmount(selectedCategoryObject.maxLoan);
      setLoanPeriod(selectedCategoryObject.LoanPeriod);
      setSelectedSubCategory(""); // Reset subcategory when category changes
    }
  };

  const handleSubCategoryChange = (e) => {
    const subCategory = e.target.value;
    setSelectedSubCategory(subCategory);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Select Category and Subcategory
        </h2>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown */}
        {selectedCategory && (
          <div className="mb-4">
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              onChange={handleSubCategoryChange}
              value={selectedSubCategory}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select a Subcategory
              </option>
              {categories
                .find((cat) => cat.category === selectedCategory)
                ?.subCategory.map((subCategory, index) => (
                  <option key={index} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Display Selection */}
        {selectedCategory && selectedSubCategory && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800 text-center">
            <strong>
              {selectedCategory} {"==>"} {selectedSubCategory}
            </strong>
          </div>
        )}

        {/* Loan Details */}
        {selectedCategory && (
          <div className="mt-6 text-gray-800 text-center">
            <p className="mb-2">
              <strong>Maximum Loan:</strong> {loanAmount}
            </p>
            <p>
              <strong>Time Period:</strong> {loanPeriod}
            </p>
          </div>
        )}

        {/* Proceed Button */}
        {selectedCategory && selectedSubCategory && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate("/loanInfo")}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Proceed Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
