<template>
<div>
  <div>
  <!-- <Banner/> -->
  <!-- <FormInput/> -->
  </div>
  <div class="row">
    <div class="">
        <!-- <div><a href="./about.html">about</a></div>
        <div><a href="./home.html">home</a></div> -->
        <router-link to="/About" replace active-class="active">about</router-link>
        <br/>
        <router-link to="/Home" replace active-class="active">home</router-link>
    </div>
  </div>
  <div>
    <div class="panel">
      <router-view>
      </router-view>
    </div>
  </div>
</div>

</template>

<script>
import Banner from './page/Banner.vue'
import FormInput from './page/LoadingButton.vue'

export default {
  name: 'App',
  components:{Banner,FormInput}
}
</script>


