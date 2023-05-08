import { useLocation } from "solid-start";

export const useRouteStat = (path: string) => {
	const location = useLocation();

	return {
		currentPath: location.pathname,
		givenPath: path,
		isActive: path == location.pathname,
	};
};
