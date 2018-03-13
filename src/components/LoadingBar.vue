<template>
  <loading-bar
    id="loading-bar-id"
    custom-class="custom-class"
    :on-error-done="errorDone"
    :on-progress-done="progressDone"
    :progress="progress"
    :direction="direction"
    :error="error" >
  </loading-bar>
</template>
<script>
  export default {
    data () {
      return {
        progress: 0,
        error: false,
        direction: 'right'
      }
    },
    mounted: function () {
      var me = this
      me.progress = 10
      for (var i = 0; i < 30; i++) {
        if (i > 20 && i < 29) {
          setTimeout(function () {
            me.progress += 5
          }, 50 * i)
        } else {
          setTimeout(function () {
            me.progress ++
          }, 10 * i)
        }
      }
      setTimeout(function () {
        me.progress = 100
      }, 1500)
    }
  }
</script>
<style lang="sass-loader" type="text/scss" scoped>
  @import '../assets/style/util';
  .LoadingBar{
    transition:all .3s ease;
    -moz-transition:all .3s ease;
    -webkit-transition:all .3s ease;
    -o-transition:all .3s ease;
    position:fixed;
    top:0;
    background:#1af184;
    height:3px;
    opacity:1
  }

  .LoadingBar-glow{
    top:0;
    position:absolute;
    width:100px;
    height:100%;
    box-shadow:-3px 0 15px 1px rgba(0,255,231,.4)
  }

  .LoadingBar--to_right{
    left:0
  }

  .LoadingBar--to_left,.LoadingBar--to_right .LoadingBar-glow{
    right:0
  }

  .LoadingBar--to_left .LoadingBar-glow{
    left:0
  }

  .LoadingBar--full{
    transition:all .1s ease;
    -moz-transition:all .1s ease;
    -webkit-transition:all .1s ease;
    -o-transition:all .1s ease;
    height:0;
    opacity:0
  }

  .LoadingBar--error{
    background:#f44336;
  }

  .LoadingBar--error .LoadingBar-glow{
    box-shadow:-3px 0 15px 1px rgba(244,67,54,.4);
  }
</style>
