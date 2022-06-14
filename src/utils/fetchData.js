const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const exerciseBaseUrl = "https://exercisedb.p.rapidapi.com/exercises";
const youtubeBaseUrl = "https://youtube-search-and-download.p.rapidapi.com";

export const fetchExerciseData = async (url = "") => {
  try {
    const resp = await fetch(`${exerciseBaseUrl}${url}`, exerciseOptions);
    const data = await resp.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchYoutubeData = async (url = "") => {
  try {
    const resp = await fetch(`${youtubeBaseUrl}${url}`, youtubeOptions);
    const data = await resp.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
