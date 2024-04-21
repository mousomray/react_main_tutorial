import React from 'react'
import axios from 'axios'
import { useState } from 'react'

//npm i react-toastify [For install React toastify]
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Postformdata = () => {

    // Create initial state for api properties
    const initialstate = {
        name: "",
        email: "",
        city: "",
        phone: "",
        photo: ""
    }

    const [user, setUser] = useState(initialstate)
    const [loading, setLoading] = useState(false); // State for loading indicator

    const [img, setimg] = useState(); // Use State for image 

    // Handle for onchange 
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user);
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        // Start loading
        setLoading(true);


        const apiUrl = "https://tureappservar.onrender.com/user";

        {/*Because it is a form data so I use form data*/ }
        let formdata = new FormData()
        formdata.append("name", user.name)
        formdata.append("city", user.city)
        formdata.append("email", user.email)
        formdata.append("phone", user.phone)
        formdata.append("photo", img)

        try {
            const response = await axios.post(apiUrl, formdata)
            if (response && response?.data?.status === 200) {
                console.log(response);
                toast.success(response?.data?.message)
                setLoading(false)
                setUser(initialstate)
            } else {
                toast.error(response?.data?.message)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            setLoading(false)
        }
    }


    return (
        <>
            <ToastContainer />

            <h1>Add user</h1>

            <div className="container">
                <form onSubmit={handleOnSubmit} method='post'>
                    <div className="form-group">

                        <label for="exampleInputEmail1">Name</label>

                        {/* name attribute is mandetory */}
                        <input type="text" name='name' className="form-control"
                            onChange={handleChange}
                            value={user.name}
                        />

                    </div>


                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" name='email'
                            onChange={handleChange}
                            value={user.email}
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="text" class="form-control" name='phone'
                            onChange={handleChange}
                            value={user.phone}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">City</label>
                        <input type="text" class="form-control" name='city'
                            onChange={handleChange}
                            value={user.city}
                        />
                    </div>

                    {/*Image Area Start*/}
                    <div className="form-group">
                        <label for="exampleInputEmail1">photo</label>
                        <input
                            type="file"
                            onChange={(e) => setimg(e.target.files[0])}
                            name="img"
                            accept="image/*"
                            class="form-control"
                        />
                        {img !== "" && img !== undefined && img !== null ? (
                            <img
                                style={{ height: "180px" }}

                                // createObjectURL use for make image url 
                                src={URL.createObjectURL(img)}
                                alt=""
                                className="upload-img"
                            />
                        ) : (
                            <>{img === "" && <p>Drag or drop content here</p>}</>
                        )}
                    </div>
                    {/*Image area end*/}

                    <button type="submit" class="btn btn-primary">{loading ?
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        :
                        "Submit"}</button>
                </form>
            </div>
        </>
    )
}

export default Postformdata
