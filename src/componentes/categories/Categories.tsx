import React from "react";
import "./Categories.css";
import type Category from "../../types/category.types";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../assets/config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";
import CategoryItem from "../category-item/CategoryItem";

const Categories = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesFromFirestore: Category[] = [];
        const querySnapshot = await getDocs(
          collection(db, "categories").withConverter(categoryConverter)
        );

        querySnapshot.forEach((doc) => {
          categoriesFromFirestore.push(doc.data());
        });

        setCategories(categoriesFromFirestore);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories-container">
      <div>
        <ul className="categories-content">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
