import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../../store/slices/WritingSlice";
import { client } from "../../client";

/* Component */
import CategoryItem from "./CategoryItem";

const WritingCategory = () => {
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.writingData);

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        setCategories(data);
        dispatch(setCategoryData(data));
        console.log({ data });
      });
    }
  }, []);
  return (
    <section className="writing_category">
      <div className="container_y_3 container_sm">
        <p className="writing_category--title ht_text">
          Browse by categories :
        </p>

        <div className="writing_category--item_wrapper">
          {categoryData.length > 0 ? (
            categoryData.map((category, index) => {
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
