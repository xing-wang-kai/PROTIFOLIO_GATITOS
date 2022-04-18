import React from 'react';
import GatitoHermoso from '../../img/gatitos hermoso.png';

const Sobre = () =>{

    return(
    <div className='Container'>
        <h2 className="titulo-2">Sobre o Gatitos</h2>

        <div className="folder_container">

            <section className='imagem-container'>
                <figure>
                    <img className='img-imagems' src={GatitoHermoso} alt='gatinho tomando banho' />
                    
                </figure>
            </section>
    
            <section className="sub_container">
                <h3 className="sub_container--titulos">Conteúdo Sobre o Gatito! </h3>
                <p className="sub_container--texto">Meow.. meow.. meow... !!O blogue do Gatito foi construido para tirar todas as dúvida sobre seu animalzinho... Ou seu animalzinho mais fofo de todos os Gatitos.. O blog tem diversas informações e sesões para você poder pesquisar tudo que deseje sobre esse elementos fofos</p>
            </section>
        
        </div>


    </div>)
}

export default Sobre;