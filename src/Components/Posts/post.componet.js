import React from "react";
import gatito from '../../img/GatitoBanho.jpeg';
import gatito2 from '../../img/gatinho01.jpg';
import {Link} from 'react-router-dom'
const Posts = (props) =>{
    if(props.indice%2 ===1){
        return(
 <Link to={`/posts/${props.post.id}`}>
<div className={`folder_container-${props.post.categoria}`}>
    
    <article className="sub_container">
        <h3 className="sub_container--titulos"><span className="coracao"> ❤  </span>{props.post.title}</h3>
        <p className="sub_container--texto"> {props.post.metadescription}</p>
    </article>

    <section className='imagem-container'>
        <figure>
        <img className='img-imagems' src={gatito} alt='gatinho tomando banho' />

        </figure>
    </section>
</div>
</Link >
    )
    }else{
    return(
        <Link to={`/posts/${props.post.id}`}>
    <div className={`folder_container-${props.post.categoria}`}>
        <section className='imagem-container'>
            <figure>
                <img className='img-imagems' src={gatito2} alt='gatinho tomando banho' />
                
            </figure>
        </section> 

        <article className="sub_container">
          <h3 className="sub_container--titulos"><span className="coracao"> ❤  </span>{props.post.title}</h3>
          <p className="sub_container--texto"> {props.post.metadescription}</p>
        </article>
    </div>
    </Link>
)
}
}

export default Posts;