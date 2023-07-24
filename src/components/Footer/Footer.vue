<template>
   <footer>
    <section class="footer-section">
        <div class="container">
            <div class="footer-section__wrapper">
                <ul class="footer-section__link-list">
                    <li class="footer-section__link-title">                       
                        <div>
                            <router-link to="/about" class="footer-section__link" active-class="active" >
                                About
                            </router-link>
                            <router-link to="/ourteam"  class="footer-section__link" active-class="active">
                                Our team
                            </router-link>
                            <router-link to="/activites" class="footer-section__link" active-class="active">
                                Activities 
                            </router-link>
                        </div>
                         <div>
                            <router-link to="/news" class="footer-section__link" active-class="active">
                                News 
                              </router-link>
                              <router-link to="/events" class="footer-section__link" active-class="active">
                                 Events 
                              </router-link>
                              <router-link to="/contacts" class="footer-section__link" active-class="active">
                                Contscts
                              </router-link>                  
                         </div>
                    </li>
                    <li class="footer-links__contact">
                        <p><span class="footer-links__span">Phone number</span> +99 893 505 45 05</p>
                        <p><span class="footer-links__span">Address</span> 68 Sadik Azimov St., Tashkent city, Uzbekistan</p>
                        <p><span class="footer-links__span">Email</span> info@sos.uz</p>
                    </li>
                </ul>
                <div class="footer-section__massange-list">
                    <ul class="massange-image">
                        <li><a href="#"><img src="../../assets//Images/png/instagram.png" alt="instagram-icon"></a></li>
                        <li><a href="#"><img src="../../assets/Images/png/facebook.png" alt="instagram-icon"></a></li>
                        <li><a href="#"><img src="../../assets/Images/png/youtube.png" alt="instagram-icon"></a></li>
                    </ul>
                    <p>«WTO» All rights reserved</p>
                    <p>© Copyright 2022 - Web developed by SOS Group</p>
                </div>
            </div>
        </div>
    </section>
   </footer>
</template>

<script setup>

</script>

<style lang="css" scoped>
.footer-section{
    background-color: #123654;
    padding: 45px 0;
}
.footer-section__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer-section__link-list{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.footer-section__link-title{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.footer-section__link{
    display: block;
    color: #98B8D3;
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
}
.active{
    color: #fff;
}
.footer-links__contact > p{
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    color: #fff;
}
.footer-links__contact > p > span{
    font-weight: 400;
    line-height: 46px;
    font-size: 14px;
    color:#97B8D3;
    padding-right: 5px;
}
.footer-section__massange-list{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
}
.massange-image{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 20px;
}
.footer-section__massange-list > p{
font-size: 16px;
line-height: 20px;
color:#97B8D3;
margin-bottom: 15px;
}
@media only screen and (max-width: 1060px){
    .footer-section__wrapper{
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    } 
    .footer-section__massange-list{
        justify-content: flex-start;
        align-items: flex-start;
    }
}
@media only screen and (max-width: 680px){
    .footer-section__link-list{
        flex-direction: column;
        align-items: flex-start;
    }
    .footer-section__link-title{
        align-items: flex-start;
        justify-content: flex-start;
    }
}
</style>