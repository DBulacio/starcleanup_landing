import React, {useState} from "react";
import Box from '@mui/material/Box';
import { TextField, Button, Container, Grid, Select, MenuItem, InputLabel, FormControl, createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const successTheme = createTheme({
  palette: {
    success: {
      main: '#4caf50', // Replace with your desired success color
    },
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, for now, let's log the data
    console.log('Form Data:', formData);
  };
  return (
    <div className="row">
      <div className="home__contact-bg">
        <h2>GET YOUR FREE QUOTE OR CONSULTATION</h2>
        <p>Please fill out the form below with the details of the service you require and your contact information,</p>
        <p className="home__contact-pg">and we will get back to you as soon as possible to discuss the options and pricing for our services.</p>
        
        <ThemeProvider theme={darkTheme}>
          <Container>

            <Box sx={{ minWidth: 120 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      color="success"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      color="success"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      color="success"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="service-label">Service</InputLabel>
                      <Select
                        label="Service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{ color: successTheme.palette.success.main }}
                      >
                        <MenuItem value="">Select Service</MenuItem>
                        <MenuItem value="Travertine Polishing">Travertine Polishing</MenuItem>
                        <MenuItem value="Terrazzo Floors Polishing">Terrazzo Floors Polishing</MenuItem>
                        <MenuItem value="Tile & Grout">Tile & Grout</MenuItem>
                        <MenuItem value="Carpet Cleaning">Carpet Cleaning</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      color="success"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="success" className="main-button contact-submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Contact