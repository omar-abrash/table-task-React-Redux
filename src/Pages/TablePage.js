// import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Table from "../Components/Table/Table";

const TablePage = () => {
  const [subArray, setSubArray] = useState([]);

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const pageNumber = +params.pageNumber.replace("page", "") - 1; // if page1 make slice [0,10]
  const mainDataArray = useSelector((state) => state.mainData.mainData);
  //
  const queryParams = new URLSearchParams(location.search);
  const isSorting = queryParams.get("sort") === "revers";

  let sortingArray = subArray;

  if (isSorting) {
    sortingArray.reverse();
  }
  //
  const sortingHandler = () => {
    // console.log(isSorting);
    navigate(`${location.pathname}?sort=${isSorting ? "normal" : "revers"}`, {
      Replace: true,
    });
  };
  //
  useEffect(() => {
    setSubArray((prevState) =>
      mainDataArray.slice(pageNumber * 10, pageNumber * 10 + 10)
    );
  }, [pageNumber, mainDataArray, isSorting]);

  return (
    <div>
      <Table
        subArray={sortingArray}
        onClickSorting={sortingHandler}
        isSorting={isSorting}
      />
    </div>
  );
};

export default TablePage;
