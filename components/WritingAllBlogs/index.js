import React, { useState, useEffect } from "react";
import { client } from "../../client";

/* Components */
import BlogCard from "./BlogCard";

const WritingAllBlogs = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "blogs"]';
    client.fetch(query).then((data) => {
      setBlogData(data);
      console.log({ data });
    });
  }, []);
  return (
    <section className="writing_allBlogs">
      <div className="container_sm">
        <p className="title ht_text">All posts :</p>

        <div className="writing_allBlogs--post_wrapper">
          {blogData?.map((blog, index) => {
            return <BlogCard data={blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WritingAllBlogs;
