import React, { useEffect, useState } from 'react'
import { useTitle } from '../hooks/useTitle';
import { Rating } from '../components';
import { useParams } from 'react-router-dom';
import { useCart } from '../context';


export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [products, setProducts] = useState([]);
  const [inCart, setIsInCart] = useState(false);
  const { id } = useParams();
  // useTitle("ebooks");
  useTitle(products.name);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const data = await response.json();
      setProducts(data);
    } fetchProducts()

  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === products.id);
    if (productInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, products.id])

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{products.name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{products.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={products.poster} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{products.price}</span>
            </p>
            <p className="my-3">

              <span>
                <Rating rating={products.rating} />
                {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
              </span>
            </p>
            <p className="my-4 select-none">

              {products.best_seller && (<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>)}
              {products.in_stock ? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>) : (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)}

              {/* */}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{products.size} MB</span>
            </p>
            <p className="my-3">
              {inCart ? (<button onClick={() => removeFromCart(products)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`} disabled={products.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button>) : (<button onClick={() => addToCart(products)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${products.in_stock ? "" : "cursor-not-allowed"}`} disabled={products.in_stock ? "" : "disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)}

              {/*  */}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {products.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
