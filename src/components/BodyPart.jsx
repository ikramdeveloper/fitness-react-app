import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import { useAppContext } from "../contexts/AppContext";

const BodyPart = ({ item }) => {
  const { bodyPart, setBodyPart } = useAppContext();

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "2px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
