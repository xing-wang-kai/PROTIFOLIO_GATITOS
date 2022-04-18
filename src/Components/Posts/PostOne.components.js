import React, {useEffect, useState} from 'react';
import gatito from '../../img/gatinho02.jpg';
import api from '../../Config/axios.connect.js';
import { useParams, useNavigate } from 'react-router-dom';

const PostOne = () => {
    let history = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState([]);
    useEffect(()=>{ 
        const options = {"Content-Type": "application/json"}
        api.get(`/${id}`, {options} )
              .then((res)=>{
                    setPost(res.data)
             }
        ).catch((err)=>{
            history('/error', {replace: true});
        })
},[post])
    if(post === null){
        history('/error', {replace: true})
    }

    return(
    <div className="folder_container-post">
    <div className={`folder_container-post--ler`}>
    
    <section className='imagem-container'>
            <figure>
            <img className='img-imagems' src={gatito} alt='gatinho tomando banho' />

            </figure>
        </section>

        <article className="sub_container">
            <h3 className="sub_container--titulos"><span className="coracao"> ❤  </span>{post.title}</h3>
            <p className="sub_container--texto"> {post.metadescription}</p>
            <p className="sub_container--texto"> {post.body}</p>
        </article>
    </div>
    </div>
)
}

export default PostOne;