import React, { useContext, useState } from 'react'
import CreateContext from './CreateContext'

const User_2 = () => {
    const { user } = useContext(CreateContext)

    const [loadData, setLoadData] = useState(4)
    const getLoadData = () => {
        setLoadData(loadData + 4)
    }

    return (
        <>

            <div className='container'>
                <div className='row'>
                    {
                        user?.slice(0, loadData).map((data) => {
                            return (
                                <div className='col-md-4'>
                                    <div class="card mt-5" style={{ width: "22rem" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">{data.name}</h5>
                                            <p class="card-text"><em><u>UserName</u></em> : {data.username}</p>
                                            <p class="card-text"><em><u>Email</u></em> : {data.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    loadData < user.length ?
                        (<button className='btn btn-success mt-5' onClick={getLoadData}>Load More</button>)
                        :
                        null
                }
            </div>

        </>
    )
}

export default User_2