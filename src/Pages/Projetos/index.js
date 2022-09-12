import React from 'react';
import {links} from './links/links';
import './sass/style.sass'

export default function Projetos() {

 


 return (
  <main className='main-projects'>
    <div className='container-projects'>

      
      <div className='card-project'>
        <div className='image-project'>
           <img src={links.portifolio}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
               <p>Portifólio</p>
               <div className='project-acess'>
                  <a href='https://github.com/SouAngelo/novo-portifolio-angelo' target='_blank'>Github</a>
                  <a href='#' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, SASS, React Router Dom</p>
            </div>
            </div>
         </div>
         
      </div>

      <div className='card-project'>
         <div  className='image-project'>
           <img src={links.ecommerce}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
               <p>E-commerce</p>
               <div className='project-acess'>
                  <a href='https://github.com/SouAngelo/lojaonline-ecommerce-reactjs' target='_blank'>Github</a>
                  <a href='https://onlineshop-projeto.netlify.app/' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Context API, Axios, CSS, API</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.pokemon}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
               <p>Pokedex</p>
               <div className='project-acess'>
                  <a href='https://github.com/SouAngelo/pokedex-reactjs' target='_blank'>Github</a>
                  <a href='https://pokedex-hiroto.netlify.app' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Context API, Axios, CSS, API</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.cats}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
               <p>Breed Cats</p>
               <div className='project-acess'>
                  <a href='https://github.com/SouAngelo/cat-breeds-reactjs' target='_blank'>Github</a>
                  <a href='https://catbreeds-select.netlify.app' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Context API, Axios, CSS, API</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.ricky}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
            <p>Ricky and Morty</p>
            <div className='project-acess'>
              <a href='https://github.com/SouAngelo/rickyandmorty-com-api' target='_blank'>Github</a>
              <a href='https://ricky-and-morty-angelo.netlify.app' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Context API, Axios, CSS, API</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.filme}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
            <p>Filmes em Cartaz</p>
            <div className='project-acess'>
              <a href='https://github.com/SouAngelo/projetocomapi-filmes' target='_blank'>Github</a>
              <a href='https://hiroto-filmes.netlify.app' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Context API, Axios, CSS, API, React Router Dom</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.landingMentor}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
            <p>Landing Page</p>
            <div className='project-acess'>
              <a href='https://github.com/SouAngelo/sunnyside-responsivo-flexbox-grid'>Github</a>
              <a href='https://sunnyside-paginaresponsiva.netlify.app/'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: HTML, CSS, Javascript</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.todoList}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
               <p>To-Do List</p>
               <div className='project-acess'>
                  <a href='https://github.com/SouAngelo/todo-list-react-typescript' target='_blank'>Github</a>
                  <a href='https://todo-list-hiroto.netlify.app/' target='_blank'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, Typescript. CSS</p>
            </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.landingTech}/>
         </div>

         <div className='project-info'>
           <div className='container-hover'>
            <p>Landing Page</p>
            <div className='project-acess'>
              <a href='https://github.com/SouAngelo/landingpage-tech'>Github</a>
              <a href='https://landingpage-tech.netlify.app'>Site</a>
            </div>

            <div className='technology'>
              <p>Tecnologias: React Js, Hooks, CSS, React Router Dom</p>
            </div>
            </div>
            
         </div>
      </div>


      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
            
            <div className='container-hover'>
               <p>Em breve</p>
               <div className='project-acess'>
                 <a href='#' target='_blank'>Github</a>
                 <a href='#' target='_blank'>Site</a>
                </div>

               <div className='technology'>
                  <p>Será lançado em breve</p>
               </div>
            </div>

            </div>
           
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>

      <div className='card-project'>
        <div  className='image-project'>
           <img src={links.embreve}/>
         </div>

         <div className='project-info'>
                 
             <div className='container-hover'>
                  <p>Em breve</p>
                  <div className='project-acess'>
                     <a href='#' target='_blank'>Github</a>
                     <a href='#' target='_blank'>Site</a>
                  </div>

                  <div className='technology'>
                     <p>Será lançado em breve</p>
                  </div>
            </div>
         </div>
      </div>
      
     
    </div>
  </main>
 );
}

    