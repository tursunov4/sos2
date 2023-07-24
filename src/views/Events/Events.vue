<template>
    <div>
        <section class="about-section">
            <div class="container">
                <h1>
                    Events
                </h1>             
                  <h4> 
                    Main   -   Events
                  </h4>
            </div>
        </section>
        <section class="events-section">
            <div class="container">
                <ul class="events-section__list">
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                    <router-link to="/events-item" class="events-section__list-item">
                        <span class="news-item__data">September 27, 2022</span>
                        <h3 class="news-item__title">Excepteur sint occaecat cupidatat </h3>
                        <p class="news-item__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </router-link>
                </ul>
                <ul class="pagination__wrapper">
                    <li class="prev"><img  src="../../assets/Images/svg/prev.svg" alt="prev"></li>
                    <li class="number">1</li>
                    <li class="number">2</li>
                    <li class="number">3</li>
                    <li class="prev"><img class="next" src="../../assets/Images/svg/prev.svg" alt="next"></li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.pagination__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    margin-bottom: 50px;
}
.pagination__wrapper li{
    font-size: 18px;
    line-height: 24px;
    padding: 10px;
    cursor: pointer;
}
.number:active{
    border: #880019 2px solid;
}
.next{
    transform: rotate(180deg);
}
.events-section__list{
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
}
.events-section__list-item{
    display: block;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 420px;
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
.about-section{
    padding: 80px 0;
    background-image: url("../../assets/Images/png/aboutsection.png");
    background-size: cover;
    background-position: center;
    margin-bottom: 50px;
  }
  .about-section h1{
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #fff;
  }
  .about-section h4{
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
  @media only screen and (max-width: 420px){
    .about-section h1{
        font-weight: 700;
        font-size: 27px;
        line-height: 46px;
      
    }
    .about-section h4{
        font-size: 13px;
        line-height: 25px;   
    }
  }
</style>