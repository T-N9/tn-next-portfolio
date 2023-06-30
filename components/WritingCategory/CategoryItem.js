import React from "react";
import Link from "next/link";
import { urlFor } from "../../client";

const CategoryItem = ({ title, slug, image }) => {
  return (
    <Link href={`/writing/categories/${slug}`}>
      <div
        // style={{ backgroundImage: `url(${urlFor(image)})` }}
        className="category_item"
      >
        <div className="overlay">
            <p className="title">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
