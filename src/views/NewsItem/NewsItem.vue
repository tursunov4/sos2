<template>
    <div>
        <section class="about-section">
            <div class="container">
                <h1>
                    Lorem ipsum dolor sit amet
                </h1>
                <h4>News   -   Lorem ipsum dolor sit amet</h4>
            </div>
        </section>
        <section class="newsitem-section">
            <div class="container">
                <div class="newsitem-section__wrapper">
                    <div class="newsitem-section__text">
                     <h3>Lorem ipsum dolor sit amet</h3>
                     <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                     <img class="newsitem__img1" src="../../assets/Images/png/newsitemimage.png" alt="newsitemiamge">
                     <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                     <div class="newsitem__images-wrapper">
                        <img class="newsitem__img2" src="../../assets/Images/png/newsitemimg2.png" alt="newsitemimg2">
                        <img class="newsitem__img2" src="../../assets/Images/png/newsitemimg2.png" alt="newsitemimg2">
                     </div>
                    </div>
                    <div class="newsitem-section__massange">
                      <ul class="newsitem__date">
                        <li>Date</li>
                        <li>September 22, 2022</li>
                      </ul>
                      <span class="hr"></span>
                      <ul class="newsitem__icon">
                        <li class="share">Share</li>
                        <li class="icons">
                            <a href="#"><img src="../../assets/Images/png/insta2.png" alt="linkedin"></a>
                            <a href="#"><img src="../../assets/Images/png/Frame 1.png" alt="linkedin"></a>
                            <a href="#"><img src="../../assets/Images/png/youtube2.png" alt="linkedin"></a>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.newsitem-section__massange{
    width: 320px;
    height: 164px;
    padding:30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-left: 30px;
}
.hr{
    display: block;
    width: 100%;
    height: 1px;
    opacity: 30%;
    background-color:  #005581;
    margin-bottom: 20px;
  
}
.share{
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: #880019;
}
.icons{
    display: flex;
    gap: 15px;
    align-items: center;
}
.newsitem__icon{
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.newsitem__date{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.newsitem__date >li{
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: #880019;
}
.newsitem-section{
    margin-bottom: 50px;
}
.newsitem-section__wrapper{
    display: flex;
    justify-content: space-between;
}
.newsitem-section__text{
    max-width: 900px;
}
.newsitem-section__text > h3{
        font-weight: 400;
        font-size: 30px;
        line-height: 44px;
        color:  #123654;
        margin-bottom: 25px;

}
.newsitem-section__text > p{
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #191919;
    margin-bottom: 25px;
}
.newsitem__img1{
    margin-bottom: 20px;
}
.newsitem__images-wrapper{
    display: flex;
    justify-content: space-between;
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
  @media only screen and (max-width: 1220px){
    .newsitem-section__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-direction: column;
    }
    .newsitem-section__massange{
        width: 900px;
        margin-left: 0;
    }
  }
  @media only screen and (max-width: 954px){
    .newsitem-section__massange{
      width: 100%;
    }
   .newsitem__img1{
    max-width: 600px;
   }
   .newsitem__img2{
    max-width: 330px;
   }
  }
  @media only screen and (max-width: 712px){
    .newsitem-section__text > p{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
       
    }
    .newsitem__images-wrapper{
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
   .newsitem__img1{
    max-width: 500px;
   }
   .newsitem__img2{
    max-width: 280px;
   }
  }
  @media only screen and (max-width: 610px){
    .newsitem-section__text > p{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
       
    }
   .newsitem__img1{
    max-width: 400px;
   }
   .newsitem__img2{
    max-width: 320px;
   }
  }
  @media only screen and (max-width: 413px){
    .newsitem-section__text > h3{
        font-size: 25px;
        line-height: 35px;
}
    .newsitem-section__text > p{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
       
    }
   .newsitem__img1{
    max-width: 300px;
   }
   .newsitem__img2{
    max-width: 300px;
   }
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