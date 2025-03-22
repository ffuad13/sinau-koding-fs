"use client";

import React, { useState } from "react";
import clsx from "clsx";

const ConditionalListExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

	const data = [
		{ id: 1, name: "John Doe", age: 25, isImportant: true},
		{ id: 2, name: "Jane Doe", age: 23, isImportant: false },
		{ id: 3, name: "James Smith", age: 30, isImportant: false },
		{ id: 4, name: "Jenny Smith", age: 28, isImportant: true },
	]
	const [items, setItems] = useState(data)

	const addItem = () => {
		const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
		const newItem = {id: newId, name: `Item ${newId}`, age: null, isImportant: false}

		setItems([...items, newItem])
	}

	const removeItem = id => setItems(items.filter(item => item.id !== id))

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Conditional Rendering & List</h1>

      {/* Login/Logout button example using ternary*/}
      {/* <button
        className={`${
          isLoggedIn ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"
        } text-white font-bold py-2 px-4 rounded mb-4`}
        onClick={toggleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button> */}
      <button
        className={clsx(
          `bg-${isLoggedIn ? "red" : "green"}-500 hover:bg-${
            isLoggedIn ? "red" : "green"
          }-700 text-white font-bold py-2 px-4 rounded mb-4`
        )}
        onClick={toggleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* if-else example */}
      <h2 className="text-xl font-semibold mb-2">1. If-Else</h2>
      {(() => {
        if (isLoggedIn) {
          return <div className="p-2 bg-green-100 border-green-400 rounded">Welcome, user to this page!</div>;
        } else {
          return <div className="p-2 bg-red-100 border-red-400 rounded">Please log in</div>;
        }
      })()}

			{/* Logical AND (&&) example */}
			<h2 className="text-xl font-semibold mt-4 mb-2">2. Logical AND (&&)</h2>
			{isLoggedIn && (
				<div className="p-2 bg-blue-100 border border-blue-400 rounded">
					Kamu sedang login, sehingga kamu bisa melihat konten ini.
				</div>
			)}

			{/* Lists example */}
			<h2 className="text-xl font-semibold mt-4 mb-2">3. List Rendering with Keys</h2>
			<button onClick={addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Add Item</button>
			<ul>
				{items.map(item => (
					<li key={item.id} className="p-2 border-b bg-gray-200 flex items-center justify-between">
						<span>{item.name}</span>
						{item.isImportant && <span className="text-red-500 ml-2">(Important Person!)</span>}
						<button onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
					</li>
				))}
			</ul>

			{items.length === 0 && <div className="text-gray-500">No item in the list</div>}
    </div>
  );
};

export default ConditionalListExample;
