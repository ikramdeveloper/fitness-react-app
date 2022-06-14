import { Box, Stack, Typography } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";
import { HorizontalScrollbar, Loader } from "../components";

const SimilarExercises = () => {
  const { targetMuscleExercises, equipmentExercises } = useAppContext();

  return (
    <Box sx={{ mt: { lg: "100px", xs: "10px" } }}>
      <Typography variant="h3" mb={5} sx={{ ml: "20px" }}>
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>

      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises?.length > 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        variant="h3"
        mb={5}
        sx={{ mt: { lg: "100px", xs: "60px" }, ml: "20px" }}
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>

      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises?.length > 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;
