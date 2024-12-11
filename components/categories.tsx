import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 1, name: "Бургеры", icon: "🍔" },
  { id: 2, name: "Закуски", icon: "🍟" },
  { id: 3, name: "Хот-доги", icon: "🌭" },
  { id: 4, name: "Комбо", icon: "🥤" },
  { id: 5, name: "Шаурма", icon: "🌯" },
  { id: 6, name: "Пицца", icon: "🍕" },
  { id: 7, name: "Вок", icon: "🍜" },
  { id: 8, name: "Десерты", icon: "🍩" },
  { id: 9, name: "Соусы", icon: "🥫" },
];

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1); // Default "Бургеры"

  const handleCategoryClick = (id: number) => {
    setActiveCategory(id); // Set active category on click
  };

  return (
    <div className="flex justify-center gap-4 py-2 pb-[50px]">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex justify-between items-center px-5 py-1 bg-white shadow-md rounded-[50px] transition-colors duration-200 ${
            activeCategory === category.id
              ? "bg-[#FFAB08] text-white"
              : "hover:bg-orange-100"
          }`}
        >
          <span className="text-2xl">{category.icon}</span>
          <p className="text-sm font-semibold mt-2">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
