<template>
    <div>
        <section class="about-section">
            <div class="container">
                <h1>
                    Contacts
                </h1>
                <h4>Main   -   Contacts       </h4>
            </div>
        </section>
        <section class="contacts-section">
            <div class="container">
                <div class="ourcontacts__wrapper">
                    <h3>Our contacts</h3>
                    <ul class="ourcontacts__wrapper-text">
                        <li>
                            <p><span class="contact__name">Phone number:</span>  (+99871) 269-40-50</p>
                            <p><span class="contact__name">Fax:</span> (+99871) 269-10-00 </p>
                            <p><span class="contact__name">Email:</span> info@wto.uz </p>
                        </li>
                        <li>
                            <p><span class="contact__name">Address:</span>  68 Sadik Azimov St., Tashkent city, Uzbekistan </p>
                            <p><span class="contact__name">Landmarks: </span>  School #145, Dark Hall cafe, Governmental Polyclinic </p>
                        </li>
                    </ul>
                </div>
                <div class="contactus__wrapper">
                    <h3>Contact us</h3>
                   <form action="">
                    <input class="name" type="text" placeholder="Name">
                    <div class="form__wrappers">
                        <input type="email" class="name" placeholder="Email">
                        <input type="text" class="name" placeholder="Phone number">
                    </div>
                    <textarea  placeholder="Comment" name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                   </form>                    
                </div>
            </div>
        </section>
        <section class="map-section">
            <div class="container">
                <h3>Map</h3>
            </div>
            <div class="map-wrapper">
                <GoogleMap style="width: 100%; height: 100%" :center="center" :zoom="15">
                    <Marker :options="{ position: center }" />
                  </GoogleMap>
            </div>
        </section>
    </div>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.689247, lng: -74.044502 };
</script>

<style lang="css" scoped>
.map-wrapper{
    width: 100%;
    height: 700px;

}
@media only screen and (max-width: 1000px){
    .map-wrapper{
        height: 500px;
    }
}
@media only screen and (max-width: 650px){
    .map-wrapper{
        height: 400px;
    }
}
@media only screen and (max-width: 450px){
    .map-wrapper{
        height: 300px;
    }
}
.contact__name{
    font-family: 700;
    font-size: 18px;
    line-height: 50px;
    color:    #880019;
}
.form__wrappers{
    display: flex;
    gap: 20px;
}
.ourcontacts__wrapper-text{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.contactus__wrapper input {
    outline: none;
    border: 1px #B3CCDA solid;
    padding: 10px 25px;
    display: block;
    margin-bottom: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #191919;
}
.contactus__wrapper textarea {
    outline: none;
    border: 1px #B3CCDA solid;
    padding: 10px 25px;
    display: block;
    margin-bottom: 20px;
    width: 100%;
    height: 140px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #191919;
}
.contactus__wrapper button{
    border: none;
    display: block;
    width: 100%;
    padding: 10px 25px;
    margin-bottom: 40px;
    background-color: #880019;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
}
.ourcontacts__wrapper-text p{
    font-family: 700;
    font-size: 20px;
    line-height: 50px;
    color: #191919;
}
.ourcontacts__wrapper{
    margin-bottom: 40px;
}
h3{
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 34px;
    font-weight: 700;
    color: 
    #123654;
}
@media only screen and (max-width: 941px){
    .ourcontacts__wrapper-text{
        flex-direction: column;
        gap: 0;
    }
}
@media only screen and (max-width: 616px){
    .ourcontacts__wrapper-text p{
        font-size: 18px;
        line-height: 40px;
    }
    .contact__name{
        font-size: 16px;
        line-height: 40px;
    }
    .contactus__wrapper input {
        padding: 8px 20px;
        font-size: 14px;
        line-height: 28px;
    }
    .contactus__wrapper textarea {
        padding: 8px 20px;
        font-size: 14px;
        line-height: 28px;
    }
    .contactus__wrapper button{
        padding: 8px 20px;
        font-size: 14px;
        line-height: 28px;
    }
}
@media only screen and (max-width: 490px){
    .ourcontacts__wrapper-text p{
        font-size: 16px;
        line-height: 30px;
    }
    .contact__name{
        font-size: 14px;
        line-height: 30px;
    }
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