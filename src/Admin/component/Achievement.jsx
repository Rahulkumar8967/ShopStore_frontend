import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          Shopping With Rahul
        </Typography>

        <Typography>Congratulations 🥳</Typography>

        <Typography>520.8k</Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>

        <TriangleImg src=""></TriangleImg>

        <TrophyImg
          alt="trophy"
          src="https://ecommerce-codewithzosh.vercel.app/images/misc/trophy.png"
        />
      </CardContent>
    </Card>
  );
};

export default Achivement;
