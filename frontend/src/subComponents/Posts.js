import React from 'react'

const Posts = ({name,location,likes,description,PostImage,date}) => {
    console.log(date);
  return (
    <>
    <div className='post'>
        <div className='postHeader'>
            <div className='name_location'>
                <h3>{name}</h3>
                <small style={{color:"#c3c3c3"}}>{location}</small>
            </div>
            <div className='click_more'><i class="fa-solid fa-ellipsis"></i></div>
        </div>

        <div className="postBody">
            <div className='img'>
                <img src={PostImage} alt="potos" />
            </div>
            <div className='lik_comm_share'>
                <div className='one'>
                    <div>
                        <span><i class="fa-regular fa-heart"></i></span>
                        <span><i class="fa-solid fa-paper-plane"></i></span>
                    </div>
                    <div>
                        {date.map((p)=>(
                            <span>{p.date} {p.month} {p.year}</span>
                        ))}
                    </div>
                </div>
                <div className='likes'>
                    {likes} likes
                </div>
            </div>
        </div>

        <div className="postFooter">
            <h4><strong>{description}</strong></h4>
        </div>
    </div>
    </>
  )
}

export default Posts