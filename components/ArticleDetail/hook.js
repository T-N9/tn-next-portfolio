import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../../client";
import { useNextSanityImage } from "next-sanity-image";

import { setCategoryData } from "../../store/slices/WritingSlice";

const Hook = (titleImage) => {
  const dispatch = useDispatch();

  const { categoryData } = useSelector((state) => state.writingData);
  const titleImgProps = useNextSanityImage(client, titleImage);

  useEffect(() => {
    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setCategoryData(data));
      });
    }
  }, []);
  return {
    categoryData,
    titleImgProps
  };
};

export default Hook;
