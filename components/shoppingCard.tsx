import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/product?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        const itemsWithQuantity = data.map((item: CartItem) => ({
          ...item,
          quantity: 1, 
        }));
        setCartItems(itemsWithQuantity);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-[467px] w-[300px]">
      <h2 className="text-lg font-semibold mb-4">Корзина</h2>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded object-cover"
            />
            <div className="flex-1 ml-4">
              <h3 className="font-medium text-sm">{item.name}</h3>
              <p className="text-xs text-gray-500">
                {item.weight}
              </p>
              <p className="font-bold text-sm">
                {item.price} ₽
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="flex justify-between font-semibold">
          Итого: <span>{totalPrice} ₽</span>
        </p>
        <button className="bg-orange-500 w-full py-2 mt-4 text-white rounded-lg hover:bg-orange-600 transition">
          Оформить заказ
        </button>
        <p className="text-sm mt-2 text-gray-500 flex items-center">
          <span role="img" aria-label="delivery">🍲</span> Бесплатная доставка
        </p>
      </div>
    </div>
  );
};

export default Cart;
