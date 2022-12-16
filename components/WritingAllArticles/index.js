import React, { useEffect, useState } from "react";
import { client } from "../../client";
import { useDispatch, useSelector } from "react-redux";
import { setArticleData } from "../../store/slices/WritingSlice";
import Link from "next/link";
import { useRouter } from "next/router";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../store/slices/LoadingSlice";

/* Util */
import CalPaginate from "../../utils/CalPaginate";

/* Components */
import ArticleCard from "./ArticleCard";

const WritingAllArticles = () => {
  const dispatch = useDispatch();
  const { articleData } = useSelector((state) => state.writingData);
  const [dataCount, setDataCount] = useState(null);

  const router = useRouter();
  const pageNumber = parseInt(router.query.page) || 1;

  console.log({ pageNumber });

  const { startIndex, endIndex, pages, noItems } = CalPaginate(
    dataCount,
    pageNumber
  );
  console.log({
    startIndex,
    endIndex,
    pages,
    noItems,
  });

  useEffect(() => {
    client.fetch(`count(*[_type == 'article'])`).then((data) => {
      console.log({ data });
      setDataCount(data);
    });
  }, []);

  useEffect(() => {
    dispatch(setStartLoading());

    if (startIndex !== null && endIndex !== null) {
      const query = `*[_type == "article"] | order(_createdAt desc) [${startIndex}...${endIndex}]`;

      client.fetch(query).then((data) => {
        dispatch(setArticleData(data));
        dispatch(setStopLoading());
        console.log({ articleData: data });
      });
    }
  }, [pageNumber, startIndex, endIndex]);

  return (
    <section className="writing_allArticles">
      <div className="container_sm">
        <p className="title ht_text">All articles :</p>

        <div className="writing_allArticles--post_wrapper">
          {articleData.length > 0 &&
            articleData?.map((article, index) => {
              return (
                <Link
                  key={index}
                  href={`writing/articles/${article.slug.current}`}
                >
                  <ArticleCard data={article} />
                </Link>
              );
            })}
        </div>

        <div className="container_y_2">
          {pageNumber !== 1 && (
            <Link href={`/writing?page=${pageNumber - 1}`}>
              <button>Back</button>
            </Link>
          )}

          {pageNumber < pages + 1 && (
            <Link href={`/writing?page=${pageNumber + 1}`}>
              <button>Next</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default WritingAllArticles;
