import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/slices/todosSlice";
import { useEffect } from "react";
import { sorter } from "../utils/sorter";

export const useSortedList = (sortBy) => {
  const { list, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList());
	}, []);

	const sortedList = sorter(list, sortBy);

  return {sortedList, isLoading}
}