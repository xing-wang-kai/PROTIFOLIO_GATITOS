import React, {useEffect, useState} from 'react';
import api from '../../Config/axios.connect.js'
import Post from '../Posts/post.componet.js'

const Home = () =>{
    const [status, setStatus] = useState([]);

    useEffect(()=>{
        const config = {'Content-Type': 'application/json'}
        api.get('/', {config} ).then((res)=>{
        setStatus(res.data)
    }).catch((err)=>{console.log('ocorreu um error')})
        
    },[])
    
   
    return(
    <div className='Container'>
        <h2 className="titulo-2">Noticias e Muito Mais!!</h2>
        {status.map( (post, index)=>{
            return(<Post key={index} post={post} indice={index} />)
        })}
    </div>)
}

export default Home;