<template>
    <div>
      <section class="about-section">
        <div class="container">
            <h1>John doe             
            </h1>
            <h4>Our team   -   John doe       </h4>
        </div>
    </section>
    <section class="ouritem-section">
      <div class="container">
        <div class="ouritem-section__wrapper">
          <img src="../../assets/Images/png/ouritem.png" alt="ouritemimg" class="ouritem-section-img">
          <div class="ouritem-secion__text-wrapper">
            <h3>John doe</h3>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="biografy-section">
      <div class="container">
        <div class="biografy-section__wrapper">
          <h3>Biography</h3>
          <p>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id.</p>
          <span class="hr-line"></span>
          <h3>Publications</h3>
          <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          <p>
              Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.              
            </p>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.biografy-section{
  margin-bottom: 50px;
}
.biografy-section__wrapper{
  padding: 20px;
  border: 1px #B3CCDA solid;
}
.biografy-section__wrapper h3{
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color:   #123654;
  margin-bottom: 20px;
}
.biografy-section__wrapper p{
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #191919;
  margin-bottom: 15px;
}
.hr-line{
  display: block;
  width: 100%;
  height: 1px;
  background-color:   #005581;
  margin: 20px 0;
}
.ouritem-section{
  margin-bottom: 50px;
}
.ouritem-section__wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.ouritem-secion__text-wrapper{
  max-width: 760px;
}
.ouritem-secion__text-wrapper > h3{
  font-weight: 700;
  font-size: 30px;
  line-height: 24px;
  color: #123654;
  margin-bottom: 20px;
}
.ouritem-secion__text-wrapper > p{
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #191919;
}
@media only screen and (max-width: 1190px){
  .ouritem-section__wrapper{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .ouritem-secion__text-wrapper{
    text-align: center;
  }
}
@media only screen and (max-width: 750px){
  .ouritem-secion__text-wrapper > p{
    font-size: 14px;
    line-height: 20px;
  }
  .biografy-section__wrapper p{
    font-size: 14px;
    line-height: 20px;
  }
}
@media only screen and (max-width: 527px){
  .ouritem-section-img{
    width: 400px;
  }
  .ouritem-secion__text-wrapper > p{
    font-size: 12px;
    line-height: 15px;
  }
  .biografy-section__wrapper p{
    font-size: 12px;
    line-height: 15px;
  }
}
@media only screen and (max-width: 415px){
  .ouritem-section-img{
    width: 300px;
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