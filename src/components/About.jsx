import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";

const About = () => {
  
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  

  
  
  return (
    <Box
      sx={{
        backgroundImage: 'url("../src/assets/img/community.png")', // Replace with the actual path to your background image
        backgroundSize: "cover",
        backgroundPosition: "inherit",
        padding: "1rem",
        color: "white", // Ensure text is readable over the background image
      }}
    >
      <Container
        sx={{
          mt: 4,
          mb: 4,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "8px",
          padding: "2rem",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            style={{
              margin: "1rem 0 2rem 0",
              fontWeight: "bold",
            }}
          >
            About Our Church
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Welcome to our church! We are a community of believers who strive to
            follow the teachings of Jesus Christ. Our church is a place where
            people from all walks of life come together to worship, grow, and
            serve.
          </Typography>
        </Box>

        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            <Tab label="Mission" wrapped />
            <Tab label="Vision" wrapped />
            <Tab label="Goal" wrapped />
            <Tab label="History" wrapped />
            <Tab label="Leadership" wrapped />
            <Tab label="Values" wrapped />
            <Tab label="Schedule" wrapped />
            <Tab label="Ministries" wrapped />
            <Tab label="Others" wrapped />
          </Tabs>
        </Paper>

        {currentTab === 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" component="p">
              Equipping disciples making disciples.
            </Typography>
          </Box>
        )}

        {currentTab === 1 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              A dynamic, Spirit-filled Church, and passionate about the lost;
              proactive and proficient in ministry skills numbering thousands
              upon thousands in kingdom building, impacting our city, nation and
              the world through leadership development, intentional
              discipleship, proclaiming and practicing the full importance and
              authenticity of the Word who are called to live in Christ,
              equipped to live like Christ, and sent to live for Christ.
            </Typography>
          </Box>
        )}

        {currentTab === 2 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Our Goal
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Raise up men and women who will love above all else the God who
              loves them above all else.
            </Typography>
          </Box>
        )}

        {currentTab === 3 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Our History
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Established in 2017, our church has a rich history of faith and
              service. From humble beginnings, we have grown into a vibrant
              congregation that is actively involved in our community here in
              Kabankalan City. Over the years, we have built a legacy of love,
              compassion, and dedication to God's work.
            </Typography>
          </Box>
        )}

        {currentTab === 4 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Our Leadership
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/path/to/leader1.jpg" // Replace with actual path
                    alt="Leader 1"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Fritz Suarez
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Elder
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {/* Pastor John has been leading our church since [Year]. His
                      passion for teaching and his heart for ministry have been
                      a blessing to our congregation. */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/path/to/leader2.jpg" // Replace with actual path
                    alt="Leader 2"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Francis John Tajanlangit
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Elder
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {/* Jane has been leading our worship team with excellence and
                      a heart for authentic worship. Her leadership inspires us
                      to draw closer to God through music. */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/path/to/leader3.jpg" // Replace with actual path
                    alt="Leader 3"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Elezardo Delicana
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Elder
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {/* Michael has a heart for young people and has been guiding
                      our youth ministry with passion and dedication. His goal
                      is to help the next generation grow in their faith. */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        {currentTab === 5 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Our Values
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              We hold these values close to our hearts:
            </Typography>
            <ul sx={{ fontFamily: "Roboto, sans-serif" }}>
              <li>
                <Typography variant="body1">
                  Faith: Trusting in God's plan and His promises.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Community: Building strong, supportive relationships.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Service: Demonstrating Christ's love through acts of kindness.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Growth: Continually maturing in our spiritual journey.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Integrity: Living out our faith with honesty and transparency.
                </Typography>
              </li>
            </ul>
          </Box>
        )}

        {currentTab === 6 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Schedule
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Here is our weekly schedule of services and events:
            </Typography>
            <ul sx={{ fontFamily: "Roboto, sans-serif" }}>
              <li>
                <Typography variant="body1">Sunday Worship: 9:00 AM</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Tuesday - Multiply (Young Adults Huddle): 6:00 PM
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Wednesday Prayer Meeting: 6:00 PM
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Friday - iGnite One Youth Fellowship: 6:00 PM
                </Typography>
              </li>
            </ul>
          </Box>
        )}

        {currentTab === 7 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Ministries
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Our church is involved in various ministries to serve the
              community:
            </Typography>
            <ul sx={{ fontFamily: "Roboto, sans-serif" }}>
              <li>
                <Typography variant="body1">
                  Children's Ministry: Engaging programs for children to learn
                  about Jesus.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Youth Ministry: Activities and teachings for teenagers.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Outreach Ministry: Serving the needs of our local community.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Worship Ministry: Leading the congregation in worship.
                </Typography>
              </li>
            </ul>
          </Box>
        )}

        {/* {currentTab === 8 && (
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Others
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Any other relevant information can be added here.
            </Typography>
          </Box>
        )} */}
      </Container>
    </Box>
  );
};

export default About;
