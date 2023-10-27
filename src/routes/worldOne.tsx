import { Box, Grid, Stack, Button, Typography } from "@mui/material";
import bgImage from '../assets/worldOne.jpg';
import monkeyImage from '../assets/monkey.png'

export default function worldOne(): JSX.Element {

  const Fullscreen = { width: "100vw", height: "100vh" };

  const Colors = {
    "green-pine": "#157a6e",
    "green-shamrock": "#499f68",
    "blue-cambridge": "#77b28c",
    "gray-ash": "#c2c5bb",
    "brown-sugar": "#b4654a",
  };

  return (
    <Box sx={{ m: "auto", ...Fullscreen, display: "flex", flexDirection: "column", backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
      // The gray thing
      <Grid container spacing={0} sx={{ borderRadius: "1em", bgcolor: `${Colors["gray-ash"]}bb`, width: "80%", height: "auto", m: "auto" }}>
        <Grid item xs={5}>
          <Stack spacing={4}>
            <Box sx={{ textAlign: "center" }}>World 1 - Jungle</Box>
            <Box component={"img"} src={monkeyImage}></Box>
            <Box>Monkey Name</Box>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={4} sx={{ maxWidth: "25em", margin: "auto" }}>
            <Box>Stats</Box>
            <Box>Bars</Box>
            <Box>Buttons sorry i have to go to class lol this is all i have time for</Box>
          </Stack>
        </Grid>
      </Grid>
    </Box >
  );


}