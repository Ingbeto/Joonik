import React, { useEffect, useState } from "react";
import { getLocationServices } from "../services/locationService";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

interface Location {
  image: string;
  name: string;
  id: string;
  created_at: Date;
}

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocationServices();
        console.log("Locations:", data);
        setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <Grid container spacing={3}>
      {locations.map((location) => (
        <Grid item md={4} key={location.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={location.image}
              alt={location.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Code: {location.id}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {new Date(location.created_at).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationList;
