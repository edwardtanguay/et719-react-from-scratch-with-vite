import { QueryFunctionContext } from "@tanstack/react-query";

interface IProps {
	queryKey: QueryFunctionContext<[number]>;
}
export const fetchData = async ({ queryKey } : IProps) => {
	const id = queryKey[1];
	const apiRes = await fetch(`http://...`);

	if (!apiRes.ok) {
		throw new Error (`details...`) // for debugging
	}

	return apiRes.json(); // returns a promise
}