import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        exercises,
        setExercises,
        bodyParts,
        setBodyParts,
        bodyPart,
        setBodyPart,
        exerciseDetail,
        setExerciseDetail,
        exerciseVideos,
        setExerciseVideos,
        targetMuscleExercises,
        setTargetMuscleExercises,
        equipmentExercises,
        setEquipmentExercises,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
