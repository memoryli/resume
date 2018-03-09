<template>
  <div class="hello">
    <div class="block">
      <span class="circleLight"></span>
      <div class="text">
        <h2>Hello,I`m MemoLi</h2>
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <div class="banner">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
  </div>
  <!--<div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <div class="page-1 page">
        <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
      </div>
      <div class="page-2 page">
        <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
        <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
        <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
      </div>
    </div>
  </div>-->
</template>

<script>
  export default {
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          beforeChange: function (prev, next) {
          },
          afterChange: function (prev, next) {
          }
        },
        msg: '差劲的程序员操心代码，优秀的程序员操心数据结构和它们之间的关系。'
      }
    }
  }
</script>
<style lang="sass-loader" type="text/scss" scoped>
  @import '../assets/style/util';
  .hello {
    width: 100%;
    height: 100%;
    background: url("../assets/img/sky.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    .block{
      width: 700px;
      height: 280px;
      margin: 0 auto;
      padding: 0;
      color: #000;
      -webkit-transition: box-shadow 0.5s;
      transition: box-shadow 0.5s;
      overflow: hidden;
      border-radius: 10px;
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
      box-sizing: border-box;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      box-shadow: none;
      .circleLight {
        top: 0;
        left: 0;
        opacity: 0;
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        position: absolute;
        border-radius: 10px;
        background: -webkit-radial-gradient(80px 40px, circle, #ffffff, rgba(0, 0, 0, 0));
        background: radial-gradient(circle at 80px 40px, #ffffff, rgba(0, 0, 0, 0))
      }
      .text{
        width: 100%;
        height: 100%;
        position: absolute;
        color: #000;
        left: 0;
        top: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-position: center;
        background-attachment: fixed
      }
      h2 {
        font-size: 70px;
        font-family: Teko,sans-serif;
        text-shadow: 8px 8px #000;
        text-transform: uppercase;
        margin: 0;
        color: #fff;
      }
      h1{
        font-size: 20px;
        color: #fff;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
      }
    }
    .block:hover {
      box-shadow: 0 0 70px #111;
      -o-box-shadow: 0 0 70px #111;
      -webkit-box-shadow: 0 0 70px #111;
      -moz-box-shadow: 0 0 70px #111;
      -ms-box-shadow: 0 0 70px #111
    }
    .block:hover .circleLight {
      opacity: 0.4
    }
    .banner{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
