import { useEffect } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

import { HorizontalScrollbar } from "../components";
import { fetchExerciseData } from "../utils/fetchData";
import { useAppContext } from "../contexts/AppContext";

const SearchExercises = () => {
  const {
    bodyParts,
    setBodyParts,
    searchTerm,
    setSearchTerm,
    setExercises,
    bodyPart,
  } = useAppContext();

  useEffect(() => {
    const getExerciseData = async () => {
      const bodyPartsData = await fetchExerciseData("/bodyPartList");

      setBodyParts(["all", ...bodyPartsData]);
    };

    getExerciseData();
  }, []);

  useEffect(() => {
    const getExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchExerciseData();
      } else {
        exercisesData = await fetchExerciseData(`/bodyPart/${bodyPart}`);
      }
      setExercises(exercisesData);
    };

    getExerciseData();
  }, [bodyPart]);

  const handleSearch = async () => {
    if (searchTerm) {
      const exerciseData = await fetchExerciseData();

      const checkForValue = (ele) => ele.toLowerCase().includes(searchTerm);
      const searchedExercises = exerciseData.filter((exercise) =>
        [
          exercise.name,
          exercise.target,
          exercise.equipment,
          exercise.bodyPart,
        ].some(checkForValue)
      );

      setSearchTerm("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "330px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} isBodyParts />
      </Box>
    </Stack>
  );
};
export default SearchExercises;
