import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import type ICategory from "../types/category.types";

export const categoryConverter = {
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ICategory {
    const data = snapshot.data(options);

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
    };
  },

  toFirestore(category: ICategory): DocumentData {
    return { ...category };
  },
};
