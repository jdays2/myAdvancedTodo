import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/slices/todosSlice";
import { useEffect } from "react";
import { sorter } from "../utils/sorter";
import { filterByDay } from "../utils/filterByDay";

export const useSortedList = (sortBy, date) => {
  const { list, isLoading } = useSelector((state) => state.todos);
	
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList());
	}, []);

	console.log(`before sorter(): ${list}`)
	let sortedList = sorter(list, sortBy);
	if(date) {
		sortedList = filterByDay(sortedList, date)
	}

  return {sortedList, isLoading}
}