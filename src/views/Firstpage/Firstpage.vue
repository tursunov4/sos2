<template>
    <div>
        <carousel  :items-to-show="1">
            <slide v-for="slide in 10" :key="slide">
              <section class="carusel">
            
               <div class="container">
                <div class="carusel-text">
                    <h1>Международная конференция </h1>
                    <h4> На тему образования</h4>
                </div>
               </div>
              </section>
            </slide>
        
            <template #addons>
              <navigation class="navigate" />
            
            </template>
          </carousel>
    <section class="firstpage__first-section"> 
     <div class="container">
        <div class="first-section__wrapper">
            <div class="first-section__text">
                <h2 class="mainpage-title">What We Do</h2>
                <span class="first-section__title-line"></span>
                <p class="first-section__title-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
                <p class="first-section__title-text2"><span class="firs-section__point">•</span>     Nemo enim ipsam voluptatem, quia voluptas sit          
                </p>
                <p  class="first-section__title-text2"><span  class="firs-section__point">•</span>  Aspernatur aut odit aut fugit
                </p>
                <p  class="first-section__title-text2"><span  class="firs-section__point">•</span>  Sed quia consequuntur magni dolores eos
                </p>
                <p  class="first-section__title-text2"><span  class="firs-section__point">•</span>  Qui ratione voluptatem sequi nesciunt
                </p>
                <p  class="first-section__title-text2"><span  class="firs-section__point">•</span>  Neque porro quisquam est
                </p>
                <p class="first-section__title-text3">
                   Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum.
                </p>
                <button class="first-section__button">More</button>
            </div>
            <img class="first-section__image" src="../../assets//Images/png/first-section.png" alt="">
        </div>
     </div>
    </section>
    
    <section class="second-section">
        <div class="container">
            <div class="second-section__wrapper">
                <h2 class="mainpage-title">Our team</h2>
                <span class="first-section__title-line"></span>
                <ul class="second-section__list">
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                    <li class="our-team__list">
                       <div class="our-team__image">
                          <img src="../../assets/Images/png/person.png" alt="">
                          <span class="our-team__line"></span>
                       </div>
                        <h3>John doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis fuga alias corrupti accusantium nobis quam facere repudiandae.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="active-section">
       <div class="container">
        <h2 class="mainpage-title">Activities</h2>
        <span class="first-section__title-line"></span>
        <div class="active-section__fillter">
            <span>Research</span>
            <span>Trending</span>
            <span>Research</span>
        </div>
        <ul class="active-section__list">
            <li class="active-section__list-item">
                <img src="../../assets/Images/png/active.png" alt="active-image">
              <div>
                <span class="active-list__type">Research</span> <span class="active-list__date">September 22, 2022</span>
              </div>
              <h4 class="active-list__title">Lorem ipsum dolor sit amet, consectetur</h4>
              <p class="active-list__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li class="active-section__list-item">
                <img src="../../assets/Images/png/active.png" alt="active-image">
              <div>
                <span class="active-list__type">Research</span> <span class="active-list__date">September 22, 2022</span>
              </div>
              <h4 class="active-list__title">Lorem ipsum dolor sit amet, consectetur</h4>
              <p class="active-list__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li class="active-section__list-item">
                <img src="../../assets/Images/png/active.png" alt="active-image">
              <div>
                <span class="active-list__type">Research</span> <span class="active-list__date">September 22, 2022</span>
              </div>
              <h4 class="active-list__title">Lorem ipsum dolor sit amet, consectetur</h4>
              <p class="active-list__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
        </ul>
        <span class="active-section__hr"></span>        
       </div>  
    </section>
    <section class="news-section">
        <div class="container">
            <div class="news-section__wrapper">
                <h2 class="mainpage-title">NEWS</h2>
                <span class="first-section__title-line"></span>
                <ul class="news-section__list">
                    <li class="news-section__list-item">
                        <img src="../../assets/Images/png/news.png" alt="news-image">
                         <div class="news-item__wrapper">
                            <span class="news-item__data">September 27, 2022</span>
                            <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                            <p class="news-item__text">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                         </div>
                    </li>
                    <li class="news-section__list-item">
                        <img src="../../assets/Images/png/news.png" alt="news-image">
                         <div class="news-item__wrapper">
                            <span class="news-item__data">September 27, 2022</span>
                            <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                            <p class="news-item__text">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                         </div>
                    </li>
                    <li class="news-section__list-item">
                        <img src="../../assets/Images/png/news.png" alt="news-image">
                         <div class="news-item__wrapper">
                            <span class="news-item__data">September 27, 2022</span>
                            <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                            <p class="news-item__text">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                         </div>
                    </li>
                </ul>
                <span class="active-section__hr"></span>      
            </div>
        </div>
    </section>
    <section class="events-section">
        <div class="container">
            <div class="events-section__wrapper">
                <h2 class="mainpage-title">Events</h2>
                <span class="first-section__title-line"></span>
                <ul class="events-section__list">
                    <li class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </li>
                    <li class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </li>
                    <li class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide,  Navigation } from 'vue3-carousel'

</script>

<style lang="css" scoped>

.carusel-text {
    margin-top: 450px;
}
.carusel-text  h1{
    text-align: start ;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color:  #FFFFFF;
    
}

.carusel-text  h4{
    text-align: start ;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: #fff;
}
.carusel{
    width: 100%;
    height: 600px;
    background-image: url('../../assets/Images/png/chiziqcarusel.png'), url('../../assets/Images/png/carusel.png') ;
    background-size: auto ,  auto;
    background-repeat: no-repeat;
    background-position: bottom left , center;
    margin-bottom: 50px;
    position: relative;
}

.events-section{
    margin-bottom: 50px;
    
}
.events-section__list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
.events-section__list-item{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 420px;
    padding: 20px;
}
@media only screen and (max-width: 1200px){
    .carusel{
       height: 500px;
        background-size: 800px auto ,  auto;
      
    }
    .carusel-text {
        margin-top: 370px;
    }
}
@media only screen and (max-width: 930px){
    .carusel{
       height: 450px;
        background-size: 600px auto ,  auto;
      
    }
    .carusel-text {
        margin-top: 350px;
    }
    .carusel-text  h1{
        font-size: 30px;
        line-height: 40px;
        
    }
    
    .carusel-text  h4{
        font-size: 16px;
        line-height: 26px;
    }
}
@media only screen and (max-width: 640px){
    .carusel{
       height: 350px;
        background-size: 400px auto ,  auto;
      
    }
    .carusel-text {
        margin-top: 285px;
    }
    .carusel-text  h1{
        font-size: 24px;
        line-height: 26px;
        
    }
    
    .carusel-text  h4{
        font-size: 14px;
        line-height: 22px;
    }
}
@media only screen and (max-width: 420px){
    .carusel{
       height: 300px;
        background-size: 300px auto ,  auto;
      
    }
    .carusel-text {
        margin-top: 255px;
    }
    .carusel-text  h1{
        font-size: 16px;
        line-height: 20px;
        
    }
    
    .carusel-text  h4{
        font-size: 12px;
        line-height: 18px;
    }
}
@media only screen and (max-width: 840px){
    
    .events-section__list{
        justify-content: space-around;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 40px;
    }
}
.news-section{
    margin-bottom: 40px;
}
.news-section__list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
}
.news-section__list-item{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 420px;
}
.news-item__wrapper{
    padding: 20px;
}
.news-item__data{
    display: block;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 5px;
    color: #880019;
}
.news-item__title{
    color: #123654;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
}
.news-item__text{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #191919;
}
.active-section__list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
}
.active-section__list-item{
    max-width: 420px;
}
.active-section__hr{
    opacity: 30%;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #005581;
    margin-bottom: 50px;
}
.active-section__list-item > img{
    margin-bottom: 8px;
}
.active-list__type{
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #880019;
}
.active-list__title{
    color: #123654;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
}
.active-list__text{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #191919;
}
.active-section__list-item > div{
    margin-bottom: 10px;
}
.active-list__date{
    margin-left: 20px;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 13px;

}
.active-section__fillter{
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;
}
.active-section__fillter > span{
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        padding: 15px 30px;
        color:  #123654;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        cursor: pointer;
}
.active-section__fillter > span:nth-child(1){
    color: #880019;
}
@media only screen and (max-width: 1350px){
    .active-section__list{
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
    }
     .news-section__list{
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
     }
     .mainpage-title{
        text-align: center;
     }
     .first-section__title-line{
        margin: 0 auto;
     }
     .active-section__fillter{
       display: flex;
       align-items: center;
       justify-content: center;
     }
}
@media only screen and (max-width:490px ){
.active-section__list-item > img{
  width: 350px;
}
.news-section__list-item {
    width: 350px;
}
.news-section__list-item > img{
    width: 350px;
}
.active-section__list-item{
    width: 350px;
}
.active-section__fillter > span{
    font-size: 14px;
    line-height: 25px;
    padding: 10px 20px;
}
}
@media only screen and (max-width: 404px){
    .active-section__fillter{
        gap: 10px;
    }
    .news-section__list-item {
        width: 330px;
    }
    .news-section__list-item > img{
        width: 330px;
    }
    .active-section__list-item > img{
        width: 330px;
      }
      .active-section__list-item{
          width: 330px;
      }
}
@media only screen and (max-width: 366px){
    .active-section__fillter{
        gap: 8px;
    }
    .active-section__list-item > img{
        width: 300px;
      }
      .active-section__list-item{
          width: 300px;
      }
      .news-section__list-item {
        width: 300px;
    }
    .news-section__list-item > img{
        width: 300px;
    }
      .active-section__fillter > span{
        font-size: 14px;
        line-height: 25px;
        padding: 8px 15px;
    }
}
.second-section{
    padding: 40px 0;
    background-color: #dce9f0;

    margin-bottom: 50px;
}
.our-team__list{
    max-width: 300px;
}
.our-team__line{
    display: block;
    width: 100px;
    height: 20px;
    background-color: #880019;
    position: absolute;
    bottom: -10px;
    left: 0;

}
.second-section__list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
}
.our-team__list > h3{
    font-weight: 700;
    line-height: 24px;
    font-size: 18px;
    color: #123654;
    margin-bottom: 10px;
}
.our-team__list > p{
    color: #191919;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.first-section{
    margin-bottom: 40px;
}
.our-team__image{
    position: relative;
    margin-bottom: 30px;
    z-index: 1;
}
.first-section__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}
.first-section__text{
    max-width: 600px;
}
.mainpage-title{
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: #123654;
    margin-bottom: 25px;   
}
.first-section__title-line{
    display: block;
    width: 74px;
    height: 4px;
    background-color: #880019;
    margin-bottom: 25px;
}
.first-section__title-text{
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #191919;
    margin-bottom: 25px;
   
}
.firs-section__point{
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #880019;
}
.first-section__title-text2{
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: black;
}
.first-section__title-text3{
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #191919;
    margin: 20px 0; 
}
.first-section__button{
    border: none;
    outline: none;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #fff;
    width: 120px;
    padding: 20px 0;
    background-color: #880019;
    cursor: pointer;
}
.first-section__image{
    margin-left: 20px;
}
@media only screen and (max-width: 1125px) {
    .first-section__wrapper{
        flex-direction: column;
        gap: 40px;
    }  
    
  .first-section__image{
    margin-left: 0;
  }   
}
@media only screen and (max-width: 680px){
  .first-section__image{
    margin-left: 0;
    max-width: 500px;
  }  
  .first-section__title-text{
    font-size: 14px;
  }
  .first-section__title-text2{
    font-size: 14px;
  }
  .first-section__title-text3{
    font-size: 14px;
  }
}
@media only screen and (max-width: 536px){
    .first-section__image{
        max-width: 400px;
      }  
}
@media only screen and (max-width: 437px){
    .first-section__image{
        max-width: 300px;
      }  
}
</style>