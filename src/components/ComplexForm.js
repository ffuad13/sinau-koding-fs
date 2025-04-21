import { useState, useCallback } from 'react';

function ComplexForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    comments: ''
  });

  const handleChange = useCallback((e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, [setFormData, formData]);
  /* const handleChange = (e) => {
    console.log('value', e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // alert('Form submitted (check console)');
  };

  // console.log("ComplexForm rendered"); // For tracking re-renders

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {/* Personal Information */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      {/* Address Information */}
      <div className="mb-4">
        <label htmlFor="addressLine1" className="block text-gray-700 text-sm font-bold mb-2">Address Line 1:</label>
        <input type="text" id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine2" className="block text-gray-700 text-sm font-bold mb-2">Address Line 2:</label>
        <input type="text" id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold mb-2">Zip Code:</label>
        <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      {/* Additional Comments */}
      <div className="mb-6">
        <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">Comments:</label>
        <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ComplexForm;