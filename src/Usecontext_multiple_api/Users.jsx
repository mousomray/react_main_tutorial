import React, { useContext } from 'react'
import CreateContext from './CreateContext';

const Users = () => {
    const {user} = useContext(CreateContext)
    console.log(user);
    return (
        <>

            <div className='container'>
                <div className='row'>
                    {
                        user?.map((item, index) => {
                            return (
                                <div className='col-md-4'>
                                    <div class="card mt-5" style={{width: "18rem"}}>
                                            <div class="card-body">
                                                <h5 class="card-title">{item.name}</h5>
                                                <p class="card-text">{item.username}</p>
                                                <p class="card-text">{item.email}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}

export default Users