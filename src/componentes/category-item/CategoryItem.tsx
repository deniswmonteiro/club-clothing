import type { FunctionComponent } from "react";
import type Category from "../../types/category.types";
import "./CategoryItem.css";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <li
      className="category-item-container"
      style={{ backgroundImage: `url("${category.imageUrl}")` }}
    >
      <div className="category-item-name">
        <p>{category.displayName}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
