<template>
  <div>
    <p class="title">技能栈</p>
    <div class="-skill-circle">
      <ul class="-outCircle">
        <li class="-out" style="background-color:rgba(121,100,102,0.8)">gulp</li>
        <li class="-out" style="background-color:rgba(49,65,82,0.8)">angular</li>
        <li class="-out" style="background-color:rgba(76,157,160,0.8)">webpack</li>
        <li class="-out" style="background-color:rgba(66,66,66,0.8)">less</li>
        <li class="-out" style="background-color:rgba(193,131,106,0.8)">git</li>
        <li class="-out" style="background-color:rgba(117,148,179,0.8)">nodejs</li>
        <li class="-out" style="background-color:rgba(71,83,94,0.8)">cordova</li>
        <li class="-out" style="background-color:rgba(147,147,189,0.8)">react</li>
      </ul>
      <ul class="-innerCircle">
        <li class="-inner" style="background-color:rgba(179,164,140,0.8)">es6</li>
        <li class="-inner" style="background-color:rgba(171,209,220,0.8)">vue</li>
        <li class="-inner" style="background-color:rgba(238,215,163,0.8)">ng2</li>
        <li class="-inner" style="background-color:rgba(207,184,178,0.8)">fp</li>
      </ul>
    </div>
    <div class="skill_detail">
      <p>熟练使用vue 、es6、vuex、webpack构建前端框架</p>
      <p>熟练使用react 、es6、webpack构建前端框架</p>
      <p>熟练使用angularJs1.x及各种类库的指令封装</p>
      <p>常驻PC/APP/微信三平台前端研发</p>
      <p>编码常思其健壮性，扩展性，维护性</p>
    </div>
    <div class="-arrow"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="sass-loader" type="text/scss" scoped>
  .title{
    margin-bottom: 100px;
  }
  .-skill-circle {
    padding: 5px;
    position: relative;
    font-size: 12px;
    width: 100%;
    color: #FFF;
    .-outCircle {
      width: 500px;
      height: 500px;
      border: 4px dashed #999;
      border-radius: 50%;
      position: relative;
      margin: 0 auto;
      .-out {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 100px;
        -webkit-backface-visibility: hidden
      }
      .-out:nth-child(1) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate
      }
      .-out:nth-child(2) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -2s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -2s infinite alternate
      }
      .-out:nth-child(3) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate
      }
      .-out:nth-child(4) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate
      }
      .-out:nth-child(5) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate
      }
      .-out:nth-child(6) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate
      }
      .-out:nth-child(7) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate
      }
      .-out:nth-child(8) {
        -webkit-animation: outX 8s cubic-bezier(.36,0,.64,1) -18s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate;
        animation: outX 8s cubic-bezier(.36,0,.64,1) -18s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate
      }
    }
    .-innerCircle {
      width: 250px;
      height: 250px;
      border: 4px dashed #999;
      border-radius: 50%;
      position: absolute;
      text-align: center;
      line-height: 50px;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
      .-inner {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 100px;
        -webkit-backface-visibility: hidden
      }
      .-inner:nth-child(1) {
        -webkit-animation: innerX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate;
        animation: innerX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate
      }
      .-inner:nth-child(2) {
        -webkit-animation: innerX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate;
        animation: innerX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate
      }
      .-inner:nth-child(3) {
        -webkit-animation: innerX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate;
        animation: innerX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate
      }
      .-inner:nth-child(4) {
        -webkit-animation: innerX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate;
        animation: innerX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate
      }
    }
  }
  .skill_detail{
    color: #000;
    margin-top: 100px;
    p{
      line-height: 45px;
    }
  }
  @-webkit-keyframes outX {
    0% {
      left: -60px
    }

    100% {
      left: 460px
    }
  }

  @keyframes outX {
    0% {
      left: -60px
    }

    100% {
      left: 460px
    }
  }

  @-webkit-keyframes outY {
    0% {
      top: -70px
    }

    100% {
      top: 470px
    }
  }

  @keyframes outY {
    0% {
      top: -70px
    }

    100% {
      top: 470px
    }
  }

  @-webkit-keyframes innerX {
    0% {
      left: -50px
    }

    100% {
      left: 210px
    }
  }

  @keyframes innerX {
    0% {
      left: -50px
    }

    100% {
      left: 210px
    }
  }

  @-webkit-keyframes innerY {
    0% {
      top: 210px
    }

    100% {
      top: -50px
    }
  }

  @keyframes innerY {
    0% {
      top: 210px
    }

    100% {
      top: -50px
    }
  }
  .-img {
    width: 150px;
    height: 150px;
    cursor: pointer;
    -webkit-transition: background .2s,-webkit-transform ease-out .1s;
    transition: background .2s,-webkit-transform ease-out .1s;
    transition: transform ease-out .1s,background .2s;
    transition: transform ease-out .1s,background .2s,-webkit-transform ease-out .1s;
    background: rgba(255,255,255,.1);
    border-radius: 50%;
    position: relative;
    margin: 0 auto
  }
  .-img img {
    width: 50%;
    position: absolute;
    top: 50%;
    right: 50%;
    -webkit-transform: translateY(-50%) translateX(50%);
    transform: translateY(-50%) translateX(50%)
  }
  .-img {
    -webkit-animation: effect 1.3s ease-out 75ms infinite;
    animation: effect 1.3s ease-out 75ms infinite
  }
  @-webkit-keyframes effect {
    0% {
      opacity: .3
    }

    40% {
      opacity: .5;
      box-shadow: 0 0 0 2px rgba(255,255,255,.1),0 0 10px 10px #109085,0 0 0 10px rgba(255,255,255,.5)
    }

    100% {
      box-shadow: 0 0 0 2px rgba(255,255,255,.1),0 0 10px 10px #109085,0 0 0 10px rgba(255,255,255,.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0
    }
  }

  @keyframes effect {
    0% {
      opacity: .3
    }

    40% {
      opacity: .5;
      box-shadow: 0 0 0 2px rgba(255,255,255,.1),0 0 10px 10px #109085,0 0 0 10px rgba(255,255,255,.5)
    }

    100% {
      box-shadow: 0 0 0 2px rgba(255,255,255,.1),0 0 10px 10px #109085,0 0 0 10px rgba(255,255,255,.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0
    }
  }
</style>
