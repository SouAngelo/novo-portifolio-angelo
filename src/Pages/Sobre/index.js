import React, {useRef} from 'react';
import './sass/style.sass'

export default function Sobre() {
 
   const item = useRef(null)
   const item2 = useRef(null)
   const item3 = useRef(null)

   function btnActive(e){
     item2.current.classList.add('hide')
     item3.current.classList.add('hide')

     item.current.classList.remove('hide')
   }

   function btnActive2(e){
    item.current.classList.add('hide')
    item3.current.classList.add('hide')

    item2.current.classList.remove('hide')

  }

  function btnActive3(){
    item.current.classList.add('hide')
    item2.current.classList.add('hide')

    item3.current.classList.remove('hide')
  }


 return (
   <main className='container-main'>
      <div className='container-navigation'>
         <div className='btns'>
           <button onClick={btnActive}>Sobre Mim</button>
           <button onClick={btnActive2} className='btn-blue'>Skills</button>
           <button onClick={btnActive3}>Contato</button>
         </div>


         <section className='about-container' ref={item}>
           <div className='about-content'>
             <p>
             Meu nome é <span>Ângelo Gustavo</span>  e sou apaixonado por tecnologia. Estou iniciando
                       na área de programação e estou em constante evolução. Iniciei os meus estudos no começo do ano de 2022,
                       onde conheci as diversas áreas que é possível atuar nessa profissão maravilhosa. Me apaixonei pelo 
                       Front End e quis mergulhar de cabeça nesse universo! Sou extremamente focado em alcançar os meus
                       objetivos. Estou buscando a minha primeira oportunidade no mercado de trabalho.
             </p>
       
              <div className='aboute-links'>
                <a href='#'>Currículo  <i className="fa-solid fa-file"></i></a>
                <a href='https://github.com/SouAngelo' target='_blank' className='link-purple'>Github  <i className="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/souangelogustavo/' target='_blank'>LinkedIn  <i className="fa-brands fa-linkedin"></i></a>
              </div>

           </div>
         </section>

         <section className='skills-container hide' ref={item2}>
                 <div className='skills'>
                       <div className='skill'>
                          <img src='https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw'/>
                       </div>

                       <div className='skill'>
                          <img src='http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg'/>
                       </div>

                       <div className='skill'>
                          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
                       </div>

                       <div className='skill'>
                          <img src='https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'/>
                       </div>

                       <div className='skill'>
                          <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579'/>
                       </div>

                       <div className='skill'>
                          <img src='https://orioni.co/nmedia/png/sass-6244.png'/>
                       </div>

                       <div className='skill'>
                          <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'/>
                       </div>
                 </div>
         </section>

         <section className='contact-container hide' ref={item3}>
               <div className='contact-content'>
                 <div className='contact-welcome'>
                   <p>Caso tenha interesse em me contratar, terei o prazer em ter uma conversa com você! :)</p>
                 </div>

                 <div className='contact-imgs'>
                     <div className='contact-img'>
                       <a href='https://www.linkedin.com/in/souangelogustavo/' target='_blank'><img src='https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHx8MHx8&w=1000&q=80'/></a>
                     </div>

                     <div className='contact-img'>
                     <a href='https://github.com/SouAngelo' target='_blank'><img src='https://visualstudio.microsoft.com/wp-content/uploads/2021/09/Octocat-1.svg'/></a>
                     </div>

                     <div className='contact-img'>
                     <a href='https://api.whatsapp.com/send?phone=5511985024510' target='_blank'><img src='https://tm.ibxk.com.br/2016/10/20/20144905885603.jpg'/> </a>
                     </div>
                 </div>

                 <div className='contact-email'>
                    <p><i className="fa-solid fa-envelope"></i> angelotj43@gmail.com</p>
                 </div>

               </div>
         </section>
      </div>
   </main>
 );
}