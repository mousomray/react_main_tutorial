import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'; // Import useForm hook 

const Adddata = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm(); // Define in State
    const[loading, setLoading] = useState(false)

    const handleOnSubmit = async (data) => {

        setLoading(true)

        const reg = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
        };

        const apiUrl = "https://tureappservar.onrender.com/user"

        try {
            const response = await axios.post(apiUrl, reg, data)
            console.log(response);
            toast.success(response?.data?.message)
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <>
            <ToastContainer />

            <div classNameName="container">
                <div className="card">
                    <div className="card-header">
                        SignUp Form React Hook Form
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control"
                                    {...register("name", {
                                        required: true,
                                        minLength:3
                                    })}
                                />
                                {errors?.name?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
                                {errors?.name?.type === "minLength" && <p style={{ color: 'red' }}>Name must be atleast three characters</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Email Pattern should be xyz@gmail.com",
                                        },
                                    })}
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                            </div>


                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("phone", {
                                        required: true,
                                        minLength: 10,
                                        maxLength: 10,
                                    })}
                                />
                                {errors?.phone?.type === "required" && (
                                    <p style={{ color: 'red' }}>This field is required</p>
                                )}
                                {errors?.phone?.type === "minLength" && (
                                    <p style={{ color: 'red' }}>Phone number must be exactly 10 characters</p>
                                )}
                                {errors?.phone?.type === "maxLength" && (
                                    <p style={{ color: 'red' }}>Phone number must be exactly 10 characters</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">city</label>
                                <input type="text" className="form-control"
                                    {...register("city", {
                                        required: true,
                                    })}
                                />
                                {errors?.city?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}

                            </div>
                            {/* <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control"
                                    name='password'
                                    {...register("password", {
                                        required: true,
                                        maxLength: 10,
                                    })}
                                />
                                {errors?.password?.type === "required" && <p>This field is required</p>}
                                {errors?.password?.type === "maxLength" && (
                                    <p>First phone cannot exceed 10 characters</p>
                                )}
                            </div> */}

                            <button type="submit" className="btn btn-primary">
                                {loading?'Loading...':'Submit'}
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Adddata
