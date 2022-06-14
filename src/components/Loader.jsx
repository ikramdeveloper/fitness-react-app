import { Stack } from "@mui/material";
import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <RotatingSquare color="gray" />
    </Stack>
  );
};
export default Loader;
