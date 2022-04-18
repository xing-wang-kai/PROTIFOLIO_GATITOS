import React from 'react';
import gatito from '../../img/gatinho03.jpeg'
const Index = () => {
    return(
    <>
        <div className="sub_container index_container ">
        <section className='index-imagem-container'>
                <figure>
                <img className='img-imagems' src={gatito} alt='gatinho tomando banho' />

                </figure>
        </section>
        <article>
            <h1>Meow..Meow..Meow.. Gatitos</h1>
            <p>Seja bem vindo ao Gatitos... Aqui temos tudo que você precisa sobre Gatinhos fofos... Acompanhe nosso blog para saber ainda mais noticias sobre seus felinos favoritos... Aguardamos sua visitas e seus petiscos..Meow..
            </p>
        </article>
        
        </div>
        <p className='discritivo'>Este website foi criado por Kai Wang, no curso de React Router para desenvolver habilidades usando diversos componentes do REACT router em aplicações REACT, a renderização dos dados foi ultilizada usando o mongoDB e api restfull com modelo MVC... Espero que aprecie este desenvolvimento</p>
        </>
        )
}


export default Index;