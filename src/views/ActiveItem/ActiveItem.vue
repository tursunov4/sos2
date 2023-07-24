<template>
    <div>
      <section class="about-section">
        <div class="container">
            <h1>
              In voluptate velit esse cillum
            </h1>             
              <h4> 
                Activities   -   In voluptate velit esse cillum   
              </h4>
        </div>
    </section>
    <section class="activeitem-section">
      <div class="container">
        <div class="activeitem__wrapper">
          <div class="activeitem__links">
            <div class="avtiveitem__links-item">
              <span class="type">Research</span>
              <span class="data">September 22, 2022</span>
            </div>
            <div class="avtiveitem__links-item2">
                <span class="share">Share</span>
                <a href="#"><img src="../../assets/Images/png/insta2.png" alt="linkedin"></a>
                <a href="#"><img src="../../assets/Images/png/Frame 1.png" alt="linkedin"></a>
                <a href="#"><img src="../../assets/Images/png/youtube2.png" alt="linkedin"></a>
            </div>
          </div>
          <div class="activeitem__text">
            <h2>In voluptate velit esse cillum</h2>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <div class="activeitem__images">
              <img src="../../assets/Images/png/activeitem1.png" alt="activeitemimg">
              <img src="../../assets/Images/png/activeitem2.png" alt="activeitemimg">
            </div>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.activeitem__text{
  margin-bottom: 50px;
}
.activeitem__text h2{
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  color: #123654;
  margin-bottom: 40px;
}
.activeitem__text p{
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #191919;
  margin-bottom: 20px;
}
.activeitem__images{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 1335px){
  .activeitem__images img{
    width: 540px;
    height: 370px;
  }
}
@media only screen and (max-width: 1130px){
  .activeitem__images img{
    width: 440px;
    height: 320px;
  }
}
@media only screen and (max-width: 945px){
  .activeitem__images{
    flex-direction: column;
  }
  .activeitem__images img{
    width: 540px;
    height: 380px;
  }
  .activeitem__text p{
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
}
@media only screen and (max-width: 570px){
  .activeitem__images{
    flex-direction: column;
  }
  .activeitem__images img{
    width: 400px;
    height: 320px;
  }
  .activeitem__text p{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
 
  }
}
@media only screen and (max-width: 470px){
  .activeitem__links{
    flex-direction: column;
    gap: 20px;
  }
}
@media only screen and (max-width: 440px){
  .activeitem__images{
    flex-direction: column;
  }
  .activeitem__images img{
    width: 300px;
    height: 220px;
  }
  .activeitem__text h2{
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    
  }

}

.share{
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #880019;
  cursor: pointer;
}
.avtiveitem__links-item2{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.activeitem__links{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.data{
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color:   #191919;
  margin-left: 15px;
}
.type{
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #880019;
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