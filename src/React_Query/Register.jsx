import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const defaultTheme = createTheme();
const Register_URL = "https://restapinodejs.onrender.com/api/register";

const Register = () => {
  
  // For Image Handling
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerUser = async (data, img) => {

    // Handling Form Data Area
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("password", data.password);
    formData.append("photo", img);

    const response = await axios.post(Register_URL, formData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: (data) => registerUser(data, img),
    onSuccess: (data) => {
      console.log("Data submitted successfully:", data);
      reset(); // Blank form after submitting data
      //navigate("/login");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
      // Add your error handling logic here
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={5}
          style={{
            padding: "1rem 3rem",
            marginTop: "1rem",
            width: "35rem",
            marginBottom: "1rem",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    {...register("name", { required: true, maxLength: 20 })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    {...register("email", { required: true, maxLength: 50 })}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    {...register("mobile", { required: true, maxLength: 20 })}
                  />
                  {errors.mobile && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    {...register("password", { required: true, maxLength: 20 })}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="photo"
                  />
                </Grid>
                {selectedImage && (
                  <Grid item xs={12}>
                    <img
                      src={selectedImage}
                      alt="Selected Image"
                      style={{ maxWidth: "100%" }}
                    />
                  </Grid>
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Loading..." : "Sign Up"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
