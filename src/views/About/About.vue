<template>
    <div>
        <section class="about-section">
            <div class="container">
                <h1>About us
                </h1>
                <h4>Main   -   About us</h4>
            </div>
        </section>
      <section class="about-section__two">
        <div class="container">
            <div class="first-section__wrapper">
                <div class="first-section__text">
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
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum. At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id
                    </p>
                </div>
                <img class="first-section__image" src="../../assets//Images/png/first-section.png" alt="">
            </div>
            <p class="about-section__two-text">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <div class="about-section__two-images">
                <img src="../../assets/Images/png/about2.png" alt="about-image">
                <img src="../../assets/Images/png/about21.png" alt="about-image2">
            </div>
            <p class="about-section__two-text">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
        </div>
      </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.about-section{
    padding: 80px;
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
        font-size: 14px;
        line-height: 25px;  
    
    }
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

.first-section__image{
    margin-left: 20px;
}
.about-section__two-text{
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: black;
    margin-bottom: 30px;
}
.about-section__two-images{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    margin-bottom: 40px;
}
@media only screen and (max-width: 1340px){
    .about-section__two-images{
        flex-direction: column;
    }
}
@media only screen and (max-width: 670px){
    .about-section__two-images > img{
        max-width: 500px;
    }
}
@media only screen and (max-width: 550px){
    .about-section__two-images > img{
        max-width: 400px;
    }
}
@media only screen and (max-width: 430px){
    .about-section__two-images > img{
        max-width: 300px;
    }
}
@media only screen and (max-width: 320px){
    .about-section__two-images > img{
        max-width: 240px;
    }
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
  .about-section__two-text{
    font-size: 14px;
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