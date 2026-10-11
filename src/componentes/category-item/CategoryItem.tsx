import type { FunctionComponent } from "react";
import type Category from "../../types/category.types";
import "./CategoryItem.css";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: category.imageUrl }}
    >
      <div className="category-item-name">
        <p>{category.displayName}</p>
        <span>Explorar</span>
      </div>
    </div>
  );
};

export default CategoryItem;
