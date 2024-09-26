import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
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
          `https://graph.facebook.com/v17.0/${PAGE_ID}/live_videos?access_token=${ACCESS_TOKEN}`,
        );

        // Log the response to see if videos are being fetched
        console.log("Facebook API response:", response.data);

        const videos = response.data.data;

        if (videos && videos.length > 0) {
          const latestVideoData = videos[0];

          // Check if the latest video is live or recorded
          if (latestVideoData.status === "LIVE") {
            if (latestVideoData.embed_html) {
              const embedHtml = latestVideoData.embed_html
                .replace('width="560"', 'width="100%"')
                .replace('height="315"', 'height="400"');
              setLatestVideo(embedHtml);
            }
          } else {
            // Show previous 3 recorded videos if no live video is available
            const previous = videos.slice(0, 3); // Get the first 3 videos
            setPreviousVideos(previous);
          }
        } else {
          console.log("No videos available.");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();

    // Dynamically load Facebook SDK
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Container sx={{ marginTop: "3rem", textAlign: "center", color: "white" }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ marginBottom: "2rem", fontWeight: "bold", paddingTop: "64px" }}
      >
        Sermons
      </Typography>

      {/* Live Video Section */}
      <Typography variant="h5" gutterBottom>
        Watch our latest sermon below:
      </Typography>
      {latestVideo ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: latestVideo }}
            sx={{ maxWidth: "100%", width: "700px", height: "400px" }}
          />
        </Box>
      ) : (
        <Typography variant="body1" color="textSecondary" gutterBottom>
          No live video available at the moment.
        </Typography>
      )}

      {/* Previous Videos Section */}
      {previousVideos.length > 0 && (
        <Box sx={{ marginTop: "3rem" }}>
          <Typography variant="h5" gutterBottom>
            Recent Sermons
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {previousVideos.map((video) => (
              <Grid item key={video.id} xs={12} sm={6} md={4}>
                <Box
                  dangerouslySetInnerHTML={{
                    __html: video.embed_html
                      .replace('width="560"', 'width="100%"')
                      .replace('height="315"', 'height="200"'),
                  }}
                  sx={{ maxWidth: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Facebook Redirect Button */}
      <Box sx={{ marginTop: "3rem" }}>
        <Typography variant="body1" gutterBottom>
          Want to see more sermons? Visit our Facebook page for past and
          upcoming sermons.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://www.facebook.com/BCCKab"
          target="_blank"
          sx={{ marginTop: "1rem", padding: "0.75rem 2rem" }}
        >
          Watch on Facebook
        </Button>
      </Box>
      {/* Facebook Page Embed */}
      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h5" gutterBottom>
          Stay Connected with Us on Facebook
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/BCCKab"
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/BCCKab"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/BCCKab">BCC Kab</a>
            </blockquote>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Sermons;
