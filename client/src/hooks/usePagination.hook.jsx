import React, { useEffect } from "react";
import Pagination from "../components/Pagination/Pagination.component";

const usePagination = (api, currentPage, setCurrentPage, active) => {
  const fetchApi = api[0];
  const data = api[1];

  useEffect(() => {
    const fetchData = async () => {
      await fetchApi(currentPage);
    };
    fetchData();
  }, [currentPage]);
  const maxPage = data.total_pages;

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const jump = page => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  };
  const first = setCount => {
    setCurrentPage(1);
    setCount(1);
  };
  const last = setCount => {
    setCurrentPage(maxPage);
    setCount(maxPage - 19);
  };

  return (
    <Pagination
      next={next}
      prev={prev}
      jump={jump}
      first={first}
      last={last}
      currentPage={currentPage}
      totalPages={maxPage}
      active={active}
    />
  );
};

export default usePagination;
