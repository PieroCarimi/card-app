import { useContext } from "react";
import { AppContext } from "../Context";

export const usePage = () => {
  const { currentPage, handlePageChange } = useContext(AppContext);
  return { currentPage, handlePageChange };
};
