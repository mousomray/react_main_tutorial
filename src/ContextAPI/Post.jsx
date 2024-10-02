import React, { useContext } from 'react'
import CreateContext from './CreateContext';

const Post = () => {
    const {post}=useContext(CreateContext)
    console.log(post);
  return (
    <>

        <div className='container'>
            <div className='row'>
                {
                    post?.map((item,index)=>{
                        return(
                            <div className='col-md-4'>
                                <div class="card mt-5" style={{width: "18rem"}}>
                                            <div class="card-body">

                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">{item.body}</p>
                                                
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

export default Post