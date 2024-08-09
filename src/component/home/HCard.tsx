import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HCard() {
  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Grid item xs={6}>
          <div>
            <Card sx={{ margin: "5px" }} style={{ backgroundColor: "gray" }}>
              <CardContent>
                <Typography variant="subtitle1" color={"white"}>
                  You Will give
                </Typography>
                <Typography variant="h5" color={"white"}>
                  ₹16220
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Card sx={{ margin: "5px", backgroundColor: "green" }}>
              <CardContent>
                <Typography variant="subtitle1" color={"white"}>
                  You Will get
                </Typography>
                <Typography variant="h5" color={"white"}>
                  ₹15999
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
