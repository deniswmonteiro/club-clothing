import type { FunctionComponent } from "react";
import type ICategory from "../../types/category.types";
import {
  StyledCategoryItemContainer,
  StyledCategoryItemName,
} from "./CategoryItem.styles";

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
  return (
    <StyledCategoryItemContainer $backgroundImage={category.imageUrl}>
      <StyledCategoryItemName>
        <p>{category.displayName}</p>
      </StyledCategoryItemName>
    </StyledCategoryItemContainer>
  );
};

export default CategoryItem;
