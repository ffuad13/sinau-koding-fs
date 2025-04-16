import React, {memo} from 'react'

function ProductItem({ product }) {
  console.log(`ProductItem ${product.id} rendered`) // For tracking re-renders

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold text-black">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
}

export default React.memo(ProductItem);
// export default ProductItem;