import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'; // Import useForm hook 

const Adddata = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm(); // Define in State
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {

        setLoading(true)

        const reg = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
        };

        const apiurl = "https://tureappservar.onrender.com/user"

        try {
            const response = await axios.post(apiurl, reg)
            console.log("Fetchin user data...", response)
            toast.success(response?.data?.message)
            setLoading(false)
            reset()
        } catch (error) {
            console.log("Error...", error)
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control"
                                    {...register("name", {
                                        required: "This Field is Required",
                                        minLength: {
                                            value: 3,
                                            message: "Name Should be atleast 3 character"
                                        }
                                    })}
                                />
                                {errors?.name && <p style={{ color: 'red' }}>{errors?.name?.message}</p>}
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
                                        required: "This Field is Required",
                                        minLength: {
                                            value: 10,
                                            message: "Phone Should be atleast 10 characters"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Phone Should be atleast 10 characters"
                                        }
                                    })}
                                />
                                {errors?.phone && <p style={{ color: 'red' }}>{errors?.phone?.message}</p>}
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">city</label>
                                <input type="text" className="form-control"
                                    {...register("city", {
                                        required: "This Field is Required"
                                    })}
                                />
                                {errors?.city && <p style={{ color: 'red' }}>{errors?.city?.message}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Adddata
