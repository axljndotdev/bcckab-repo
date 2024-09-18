import React, { useState } from "react";
import { Container, Typography, Box, Button, Grid, Card } from "@mui/material";

const Give = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDonateClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              style={{
                color: "white",
                margin: "1rem 0 2rem 0",
                fontWeight: "bold",
              }}
            >
              Give
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your donations help us make a difference in the lives of others.
              Thank you for your generosity!
            </Typography>
            {!showOptions && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleDonateClick}
              >
                Give Now
              </Button>
            )}
            {showOptions && (
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleOptionClick("GCash")}
                  sx={{ mb: 1 }}
                >
                  Give via GCash
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {!showOptions ? (
            <Card>
              {/* <img
                src="src/assets/img/give-bcc.png"
                alt="Charity"
                style={{ width: "50%", maxWidth: "50%", height: "auto" }}
              /> */}
            </Card>
          ) : (
            <Box>
              {selectedOption && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    This option is a work in progress. We encourage you to give
                    your offering to the Lord at the offering box located at
                    entrance to the main hall when you visit.
                  </Typography>
                  {/* {selectedOption === "GCash" && (
                    <Box>
                      <Typography variant="body1" gutterBottom>
                        Step 1: Log in to your PayPal account.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Step 2: Click on the "Send Money" option.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Step 3: Enter our PayPal email address:
                        example@example.com.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Step 4: Enter the donation amount and confirm the
                        transaction.
                      </Typography>
                    </Box>
                  )} */}
                </Box>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Give;
