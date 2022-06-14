import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchExerciseData, fetchYoutubeData } from "../utils/fetchData";
import { useAppContext } from "../contexts/AppContext";
import { Details, ExerciseVideos, SimilarExercises } from "../components";

const ExerciseDetail = () => {
  const {
    setExerciseDetail,
    setExerciseVideos,
    setTargetMuscleExercises,
    setEquipmentExercises,
  } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const exerciseData = await fetchExerciseData(`/exercise/${id}`);
      const youtubeData = await fetchYoutubeData(
        `/search?query=${exerciseData.name} exercise&type=v`
      );

      setExerciseDetail(exerciseData);
      setExerciseVideos(youtubeData?.contents);

      const targetMuscleExerciseData = await fetchExerciseData(
        `/target/${exerciseData.target}`
      );
      const equipmentExerciseData = await fetchExerciseData(
        `/equipment/${exerciseData.equipment}`
      );

      setTargetMuscleExercises(targetMuscleExerciseData);
      setEquipmentExercises(equipmentExerciseData);
    };

    getData();
  }, [id]);

  return (
    <Box>
      <Details />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};
export default ExerciseDetail;
