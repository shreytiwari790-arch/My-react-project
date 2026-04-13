import React, { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Admin = () => {
  const nameRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const priceRef = useRef();
  const fileRef = useRef();

  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle local image preview before upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    const file = fileRef.current.files[0];
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dhdcliorf/image/upload",
        { method: "POST", body: formData }
      );
      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error("Cloudinary Error:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const imageUrl = await uploadImage();

    if (!imageUrl) {
      alert("Image upload failed ❌");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name: nameRef.current.value,
        description: descRef.current.value,
        rating: Number(ratingRef.current.value),
        price: parseFloat(priceRef.current.value),
        image: imageUrl,
        createdAt: new Date(),
      });

      alert("Product added successfully! 🎉");
      setPreviewUrl(null);
      e.target.reset();
    } catch (error) {
      console.error("Firestore Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Add New Menu Item</h2>
          <p className="text-gray-500 text-sm">Upload details for the crispy chicken card</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              ref={nameRef}
              placeholder="e.g. Crispy Chicken"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description (Ingredients)</label>
            <textarea
              ref={descRef}
              rows="2"
              placeholder="Chicken breast, chili sauce, tomatoes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Rating (1-5)</label>
              <input
                type="number"
                ref={ratingRef}
                min="1"
                max="5"
                step="0.1"
                placeholder="4.5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                required
              />
            </div>
            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                ref={priceRef}
                step="0.01"
                placeholder="99.15"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product Image</label>
            <input
              type="file"
              ref={fileRef}
              onChange={handleFileChange}
              accept="image/*"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 transition"
              required
            />
          </div>

          {/* Preview Window */}
          {previewUrl && (
            <div className="mt-4 border rounded-lg p-2 bg-gray-50">
              <p className="text-xs text-gray-400 mb-2 uppercase font-bold tracking-wider">Preview:</p>
              <img src={previewUrl} alt="Preview" className="h-32 w-full object-cover rounded-md" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition duration-200 
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 active:scale-[0.98]"}`}
          >
            {loading ? "Uploading Data..." : "Add to Menu"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;