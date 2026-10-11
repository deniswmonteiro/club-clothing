import type { FunctionComponent } from "react";
import type Category from "../../types/category.types";
import {
  StyledCategoryItemContainer,
  StyledCategoryItemName,
} from "./CategoryItem.styles";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <StyledCategoryItemContainer
      style={{ backgroundImage: `url("${category.imageUrl}")` }}
    >
      <StyledCategoryItemName>
        <p>{category.displayName}</p>
      </StyledCategoryItemName>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
