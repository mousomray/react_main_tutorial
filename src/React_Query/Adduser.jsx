import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();



const Adduser = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const reg = async (data) => {

    setLoading(true);

    // Handling Form Data Area
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", image);

    try {
      const apiurl = "https://tureappservar.onrender.com/user"
      const response = await axios.post(apiurl, formData)
      console.log("My Register response is ", response);
      if (response && response?.data?.status === 200) {
        reset(); // Blank form after submitting data
        setImage('');
        setLoading(false);
        toast.success(response?.data?.message)
        navigate('/user')
      } else {
        setLoading(false);
        toast.error(response?.data?.message)
      }
    } catch (error) {
      console.log("Error Fetching Register data", error);
      setLoading(false);
      toast.error(error?.response?.data?.message)
    }
    return response.data;
  };

  // Start Mutation Area
  const mutation = useMutation({
    mutationFn: reg
  });

  // Handle On Submit Area
  const onSubmit = (data) => {
    mutation.mutate(data);
  };


  return (
    <>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              marginBottom: 8,
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.12)'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>

              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    {...register("name", {
                      required: "This field is Required",
                      minLength: {
                        value: 3,
                        message: "Name must be atleast 3 characters"
                      }
                    })}
                  />
                  {errors?.name && (
                    <p style={{ color: 'red' }}>{errors.name.message}</p>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    {...register("city", {
                      required: "This field is Required",
                      minLength: {
                        value: 3,
                        message: "City must be atleast 3 characters"
                      }
                    })}
                  />
                  {errors?.city && (
                    <p style={{ color: 'red' }}>{errors.city.message}</p>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email Pattern should be xyz@gmail.com",
                      },
                    })}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    id="phone"
                    label="Phone"
                    {...register("phone", {
                      required: "This field is Required",
                      minLength: {
                        value: 10,
                        message: "Phone number must be 10 characters"
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be 10 characters"
                      }
                    })}
                  />
                  {errors?.phone && (
                    <p style={{ color: 'red' }}>{errors.phone.message}</p>
                  )}
                </Grid>

                {/*This form section is for the submit image*/}
                <Grid item xs={12}>
                  <div style={{ marginBottom: '20px' }}>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" accept="image/*" className="form-control" />

                    {image !== "" && image !== undefined && image !== null ? (
                      <img style={{ height: "300px", width: "100%" }} src={URL.createObjectURL(image)} alt="" className="upload-img" />
                    ) : (
                      <>{image === "" && <p style={{ color: 'white' }}>Drag or drop content here</p>}</>
                    )}
                  </div>
                </Grid>
                {/*Image area end*/}
              </Grid>


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? 'Please wait...' : 'Add'}
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>

    </>
  )
}

export default Adduser