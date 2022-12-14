import React, { useState, useEffect } from "react";
import { client } from "../../client";

/* Component */
import CategoryItem from "./CategoryItem";

const WritingCategory = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const query = '*[_type == "category"]';
    client.fetch(query).then((data) => {
      setCategories(data);
      console.log({data})
    });
  }, []);
  return (
    <section className="writing_category">
      <div className="container_y_3 container_sm">
        <p className="writing_category--title ht_text">
          Browse by categories :
        </p>

        <div className="writing_category--item_wrapper">
            {categories ? (
              categories.map((category, index) => {
                return (
                  <CategoryItem
                    key={index}
                    title={category.title}
                    slug={category.slug.current}
                    image={category.titleImage}
                  />
                );
              })
            ) : (
              <p>Loading</p>
            )}
        </div>
      </div>
    </section>
  );
};

export default WritingCategory;
