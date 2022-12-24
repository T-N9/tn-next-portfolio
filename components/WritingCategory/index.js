import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../../store/slices/WritingSlice";
import { client } from "../../client";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../store/slices/LoadingSlice";

/* Component */
import CategoryItem from "./CategoryItem";

const WritingCategory = () => {
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.writingData);

  useEffect(() => {
    dispatch(setStartLoading());
    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setCategoryData(data));
        dispatch(setStopLoading());
      });
    } else {
      dispatch(setStopLoading());
    }
  }, []);
  return (
    <section className="writing_category">
      <div className="container_y_3 container_sm">
        <p className="writing_category--title ht_text">
          Browse by categories :
        </p>

        {categoryData.length > 0 ? (
          <div className="writing_category--item_wrapper">
            {categoryData.map((category, index) => {
              return (
                <CategoryItem
                  key={index}
                  title={category.title}
                  slug={category.slug.current}
                  image={category.titleImage}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex_auto loading_sec">
            <i className={`gg-${"spinner"}`}></i>
          </div>
        )}
      </div>
    </section>
  );
};

export default WritingCategory;
