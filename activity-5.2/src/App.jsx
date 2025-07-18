import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function handleAddProduct() {
    setProducts((curProducts) =>
      curProducts.concat({
        id: new Date().getTime(),
        title: 'Another new product',
        price: 15.99,
      })
    );
  }

  return (
    <section className='bg-sky-100 h-screen w-screen flex flex-col items-center justify-center gap-5'>
      <button onClick={handleAddProduct} className='bg-black text-white px-3 py-1 hover:bg-stone-600'>Add Product</button>
      <ul className='flex flex-col items-center justify-center  gap-5'>
        {products.map((product) => (
          <li key={product.id} className='bg-sky-400 border-2 border-black w-130 p-3'>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App