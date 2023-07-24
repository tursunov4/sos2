<template>
  <div>
    <header>
        <section class="header-section">
            <div class="container">
                <div class="header-section__wrapper">
                 <div >
                    <router-link to="/">
                        <img @click="coloseSidebar"  class="site-logo__wrapper" src="../../assets/Images/png/site-logo.png" alt="site-logo">
                    </router-link>
                 </div>
                  <nav class="header-section__navbar">
                    <router-link to="/about" class="header-section__link" active-class="active" >
                        About
                    </router-link>
                    <router-link to="/ourteam"  class="header-section__link" :class="$route.meta.child==='active' ? 'active' :'' " active-class="active">
                        Our team
                    </router-link>
                    <router-link to="/activites" class="header-section__link" :class="$route.meta.child==='active2' ? 'acitve' :'' " active-class="active" >
                        Activities 
                    </router-link>
                    <router-link to="/news" class="header-section__link" active-class="active">
                      News 
                    </router-link>
                    <router-link to="/events" class="header-section__link" active-class="active">
                       Events 
                    </router-link>
                    <router-link to="/contacts" class="header-section__link" active-class="active">
                      Contscts
                    </router-link>
                  </nav>
                  <div @click="handleclick" class="header-section__hamburger">
                    <img src="../../assets/Images/svg/list.svg" alt="hamburger" width="30">
                  </div>
                </div>
            </div>
        </section>
    </header>
    <div v-if="sidebar" class="header-section__hamburger-links">
        <img @click="coloseSidebar" class="close" src="../../assets/Images/svg/close.svg" alt="close">
        <ul class="hamburger__links">
            <router-link @click="coloseSidebar" to="/about" class="hamlink" active-class="active" >
                About
            </router-link>
            <router-link @click="coloseSidebar" to="/ourteam" class="hamlink"  :class="$route.meta.child==='active' ? 'active' :'' " active-class="active">
                Our team
            </router-link>
            <router-link @click="coloseSidebar" to="/activites" class="hamlink" :class="$route.meta.child==='active2' ? 'acitve' :'' " active-class="active" >
                Activities 
            </router-link>
            <router-link @click="coloseSidebar" to="/news" class="hamlink" active-class="active">
              News 
            </router-link>
            <router-link @click="coloseSidebar" to="/events" class="hamlink" active-class="active">
               Events 
            </router-link>
            <router-link @click="coloseSidebar" to="/contacts" class="hamlink" active-class="active">
              Contscts
            </router-link>
          
        </ul>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue'
const sidebar =ref(false)
const handleclick =()=>{
    sidebar.value = true
}
const coloseSidebar =()=>{
    sidebar.value=false
}
</script>

<style lang="css" scoped>
.close{
    width: 24px;
    cursor: pointer;
}
.hamburger__links{
    margin-top: 20px;
}
.hamlink{
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
}

.header-section__hamburger-links{
    padding: 10px;  
    top: 0;
    position: fixed;
    height: 100vh;
    width: 50%;
    background-color: #123654;
    
    right: 0;
    z-index: 6;
}
.header-section__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 0;
}
.header-section__navbar{
    max-width: 820px;
    height: 100%;
    display: flex; 
    justify-content: space-between;
    gap: 30px;
}
.header-section__link{ 
    padding-top: 20px;
    padding-bottom: 45px; 
    font-weight: 400;
    font-size: 16px;
    line-height: 15.31px;
    color: #123654;
}
.active{
    color: #880019;
    border-bottom: 4px #880019 solid;
}


.header-section__hamburger{
    display: none;
}

@media only screen and (max-width: 974px) {
    .header-section__navbar{
        display: none;
    }
    .header-section__hamburger{
        display: block;
        cursor: pointer;
        margin-left: 10px;
    }
}
@media only screen and (max-width: 530px){
  .site-logo__wrapper{
    width: 320px;
    height: 50px;
  }
}
@media only screen and (max-width: 403px){
    .site-logo__wrapper{
        width: 220px;
        height: 40px;
    }
}
</style>