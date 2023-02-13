<template>
  <LoginNavbar />
  <router-view></router-view>
  <FooterCom />
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import FooterCom from "@/components/FooterCom.vue";
export default {
  name: "App",
  components: {
    LoginNavbar,
    FooterCom
  },
  mounted(){
    localStorage.setItem("user-info",null);
  }
};
</script>

<style>
#app {
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background: lightseagreen;
}
</style>
