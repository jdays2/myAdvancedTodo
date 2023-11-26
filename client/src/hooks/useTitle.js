import { useEffect } from 'react';

const useTitle = (title, dependencies = []) => {
	useEffect(() => {
		if (title) {
			document.title = `Todo | ${title}`;
		}
	}, [title, ...dependencies]);
};

export default useTitle;
