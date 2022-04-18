import React from 'react';
import gatitoNotFound from '../../img/gatitonotfound.jpg'

const NotFound = () => {
    return(
        <div className='Container'>
        <div className="folder_container">

            <section className="sub_container">
            <h3 className="sub_container--titulos">ERROR 404! </h3>
                <p className="sub_container--texto">I'm sorry but the page is not FOUND... Try Again... Neow...</p>
            </section>

            <section className='imagem-container'>
                <figure>
                    <img className='img-imagems' src={gatitoNotFound} alt='gatinho tomando banho' />
                    
                </figure>
            </section>

        </div>
    </div>
    )
}

export default NotFound;