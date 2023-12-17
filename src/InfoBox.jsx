/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const init_img =
    "https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={init_img}
            title="green iguana"
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography> */}
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min temp = {info.temp_min}</p>
              <p>Max temp = {info.temp_max}</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feels_like}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
