import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key":
				"3fcba7b8dbmsh9f5a67804bb4d42p1070f7jsn299855da45ca",
		},
	});

	return data;
};
