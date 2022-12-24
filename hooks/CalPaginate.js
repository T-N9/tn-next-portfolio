import { useState, useEffect } from "react";

const CalPaginate = (totalItems, pageNum) => {
  const [startIndex, setStartIndex] = useState(null);
  const [endIndex, setEndIndex] = useState(null);

  let startNum = 0,
    endNum = 6;
  let pages, noItems;

  if (totalItems % 6 !== 0) {
    pages = parseInt(totalItems / 6);
    noItems = parseInt(totalItems % 6);
  } else {
    pages = parseInt(totalItems / 6);
    noItems = 0;
  }

  if (pages >= pageNum) {
    for (let i = 1; i <= pageNum; i++) {
      if (i > 1) {
        startNum = startNum + 6;
        endNum = endNum + 6;
      }
    }
  } else if (pages < pageNum) {
    for (let i = 1; i <= pageNum - 1; i++) {
      if (i > 1) {
        startNum = startNum + 6;
        endNum = endNum + 6;
      }
    }
    startNum = endNum;
    endNum = endNum + noItems;
  }

  useEffect(() => {
    setStartIndex(startNum);
    setEndIndex(endNum);
  }, [startNum, endNum]);

  return {
    startIndex,
    endIndex,
    pages,
    noItems,
  };
};

export default CalPaginate;
