import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import axios from "axios";

const PAGE_ID = "119653355427073";
const ACCESS_TOKEN =
  "EAAU5p3Wt59wBO3YIm2Av1RUSz08G2XFjQZC4vO8IcqJP3kzqA9aWHT3GKYD1zNZAdZCDOMd0oqc7vDVUIWC2m1oKfTZAjKciIMkpp36bB5K9HxmxF9OPde7ZA0HUn4O6JrIKcZAZCIBCQ5zBP1vlbWJODGhOeFxvwjxXoPdfi5ACwbtTKglXKx4NXIwfsgRfmnBckADu45epAyLFzG3ndFf9CtiCcA8w3LxZBQZDZD";

const Sermons = () => {
  const [latestVideo, setLatestVideo] = useState("");
  const [previousVideos, setPreviousVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v12.0/${PAGE_ID}/live_videos?access_token=${ACCESS_TOKEN}`,
        );
        const videos = response.data.data;
        if (videos.length > 0) {
          const embedHtml = videos[0].embed_html
            .replace('width="560"', 'width="400"')
            .replace('height="315"', 'height="225"');
          setLatestVideo(embedHtml);
          setPreviousVideos(videos.slice(1)); // get all videos except the latest
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Container sx={{ margin: "1rem 0 1rem 0" }}>
      <Typography variant="h3" component="h1" gutterBottom style={{ color: "white", margin: "2rem 0 2rem 0", fontWeight: "bold" }}>
        Sermons
      </Typography>
      <Typography variant="body1" gutterBottom>
        Check out our latest sermon below:
      </Typography>
      {latestVideo ? (
        <Box dangerouslySetInnerHTML={{ __html: latestVideo }} />
      ) : (
        <Typography variant="body1" color="textSecondary">
          No live video available at the moment.
        </Typography>
      )}
    </Container>
  );
};

export default Sermons;
