"use client";

import { useState } from "react";
import ky from "ky";
import clsx from "clsx";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true);
    setMessage("");

    try {
      const response = await ky
        .post("http://localhost:3030/api/user/register", { json: { firstName, lastName, email, password } })
        .json();
      console.log(response);

      if (!response) {
        setMessage(response.message || "Registration failed");
      } else {
        setMessage(response.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("error register", error);
      setMessage("Error register.");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-amber-300 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>

			{message && <p className={clsx(`mt-4 text-sm ${isLoading ? 'text-green-500' : 'text-red-500'}`)}>{message}</p>}
    </form>
  );
}

export default RegisterForm