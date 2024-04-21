import axios from 'axios';
import React, { useState } from 'react';

// For Toast Message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

const Addstudent = () => {
    
    // Decleare initial state
    const initialState = {
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        state: "",
        section: "",
        classes: ""
    };

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(false); // State for loading indicator
    // const navigate = useNavigate();
    const [error, setError] = useState({}); // State for validation 

    // Create validation function 
    const validation = () => {
        let error = {}

        // For Name 
        if (!user.name) {
            error.name = "Name is Required"
        } else if (user.name.length < 3) {
            error.name = "Name must be atleast 3 characters"
        }

        // For Email 
        if (!user.email) {
            error.email = "Email is Required"
        } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = "Email Should be xyz@gmail.com pattern"
        }

        // For Phone 
        if (!user.phone) {
            error.phone = "Phone is Required"
        } else if (user.phone.length !== 10) {
            error.phone = "Phone number must be 10 characters"
        }

        // For City 
        if (!user.city) {
            error.city = "City is Required"
        }

        // For Address 
        if (!user.address) {
            error.address = "Address is Required"
        }

        // For State
        if (!user.state) {
            error.state = "State is Required"
        }

        // For Section 
        if (!user.section) {
            error.section = "Section is Required"
        } else if (user.section.length < 3) {
            error.section = "Section must be atleast 3 characters"
        }

        // For Classes 
        if (!user.classes) {
            error.classes = "Class is Required"
        }

        return error

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        // Add Validation in Handle on change 

        // For name 
        if (name === 'name') {
            if (value.length === 0) {
                setError({ ...error, name: 'Name is Required' })
                setUser({ ...user, name: '' })
            } else {
                setError({ ...error, name: '' })
                setUser({ ...user, name: value })
            }
        }

        // For Email 
        if (name === 'email') {
            if (value.length === 0) {
                setError({ ...error, email: 'Email is Required' })
                setUser({ ...user, email: '' })
            } else {
                setError({ ...error, email: '' })
                setUser({ ...user, email: value })
            }
        }

        // For phone 
        if (name === 'phone') {
            if (value.length === 0) {
                setError({ ...error, phone: 'Phone is Required' })
                setUser({ ...user, phone: '' })
            } else {
                setError({ ...error, phone: '' })
                setUser({ ...user, phone: value })
            }
        }

        // For city 
        if (name === 'city') {
            if (value.length === 0) {
                setError({ ...error, city: 'City is Required' })
                setUser({ ...user, city: '' })
            } else {
                setError({ ...error, city: '' })
                setUser({ ...user, city: value })
            }
        }

        // For address 
        if (name === 'address') {
            if (value.length === 0) {
                setError({ ...error, address: 'Address is Required' })
                setUser({ ...user, address: '' })
            } else {
                setError({ ...error, address: '' })
                setUser({ ...user, address: value })
            }
        }

        // For state 
        if (name === 'state') {
            if (value.length === 0) {
                setError({ ...error, state: 'State is Required' })
                setUser({ ...user, state: '' })
            } else {
                setError({ ...error, state: '' })
                setUser({ ...user, state: value })
            }
        }

        // For section 
        if (name === 'section') {
            if (value.length === 0) {
                setError({ ...error, section: 'Section is Required' })
                setUser({ ...user, section: '' })
            } else {
                setError({ ...error, section: '' })
                setUser({ ...user, section: value })
            }
        }

        // For classes 
        if (name === 'classes') {
            if (value.length === 0) {
                setError({ ...error, classes: 'Class is Required' })
                setUser({ ...user, classes: '' })
            } else {
                setError({ ...error, classes: '' })
                setUser({ ...user, classes: value })
            }
        }
       
    };

    // Handle for Submit 
    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true) // Start Loading 

        // For Error Handling 
        let ErroList = validation()
        setError(validation())

        if (Object.keys(ErroList).length === 0) {

            const apiUrl = "https://tureappservar.onrender.com/student/create";

            // It is a Raw data so I am not using newFormdata() 

            try {
                const response = await axios.post(apiUrl, user) // If it will formdata you will write formdata not user.
                console.log(response);
                toast.success(response?.data?.message)
                setLoading(false)
                setUser(initialState)
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message)
                setLoading(false)
            }
        }else{
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
    }



    return (
        <>
            <ToastContainer />

            {/* <!-- contact section --> */}

            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Student Register
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <form onSubmit={handleSubmit} method='post'>
                                <div>
                                    <input type="text" name='name' placeholder="Name" onChange={handleChange}
                                        value={user.name} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.name}</span>
                                </div>
                                <div>
                                    <input type="email" name='email' placeholder="Email" onChange={handleChange} value={user.email} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.email}</span>
                                </div>
                                <div>
                                    <input type="text" name='phone' placeholder="Phone Number" onChange={handleChange} value={user.phone} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.phone}</span>
                                </div>
                                <div>
                                    <input type="text" name='city' placeholder="City" onChange={handleChange}
                                        value={user.city} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.city}</span>
                                </div>
                                <div>
                                    <input type="text" name='address' placeholder="Address" onChange={handleChange}
                                        value={user.address} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.address}</span>
                                </div>
                                <div>
                                    <input type="text" name='state' placeholder="State" onChange={handleChange}
                                        value={user.state} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.state}</span>
                                </div>
                                <div>
                                    <input type="text" name='section' placeholder="Section" onChange={handleChange}
                                        value={user.section} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.section}</span>
                                </div>
                                <div>
                                    <input type="text" name='classes' placeholder="Classes" onChange={handleChange}
                                        value={user.classes} style={{ color: 'black' }} />
                                    <span style={{ display: 'block', color: 'red' }}>{error?.classes}</span>
                                </div>

                                <div className="d-flex ">
                                    <button type='submit' className="btn btn-primary">
                                        {loading ?
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            :
                                            "Submit"}
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="map_container">
                                <div class="map">
                                    <div id="googleMap" style={{ width: '100%', height: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end contact section --> */}
        </>
    );
};

export default Addstudent;
