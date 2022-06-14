import { useAppContext } from "../contexts/AppContext";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = () => {
  const {
    exerciseVideos,
    exerciseDetail: { name },
  } = useAppContext();

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "50px", xs: "20px" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={item.video.videoId}
            target="_blank"
            rel="noopener noreferrer"
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title.length > 40
                  ? item.video.title.slice(0, 40) + "..."
                  : item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;
