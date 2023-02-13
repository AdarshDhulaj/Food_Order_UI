<style>
.user-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 30px;
}

.sub-menu-wrap {
  position: absolute;
  top: 50px;
  right: 10px;
  width: 320px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s;
}

.sub-menu-wrap.open-menu {
  max-height: 400px;
  border-radius: 20px;
}

.sub-menu {
  background: white;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info h4 {
  font-weight: 500;
  color: black;
  font-family: "Times New Roman", Times, serif;
}

.user-info img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.sub-menu hr {
  border: 0;
  height: 1px;
  width: 100%;
  background: lightseagreen;
  margin: 15px 0 10px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525252;
  margin: 12px 0;
}

.sub-menu-link p {
  padding-top: 15px;
  width: 100%;
}

.sub-menu-link i {
  width: 40px;
  background: white;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}

.sub-menu-link span {
  font-size: 22px;
  transition: transform 0.5s;
}

.sub-menu-link:hover span {
  transform: translateX(5px);
}

.sub-menu-link:hover p {
  font-weight: 600;
}
</style>

<template>
  <img
    src="@/Images/p.png"
    alt="user-pic"
    class="user-pic"
    @click="toggleMenu()"
  />

  <div class="sub-menu-wrap" id="subMenu" v-bind:class="{'open-menu':isLogged}">
    <div class="sub-menu" >
      <div class="user-info">
        <img src="@/Images/p.png" alt="" />
        <h4>ABC Panday</h4>
      </div>
      <hr />

      <a href="#" class="sub-menu-link">
        <i class="fa-solid fa-user"></i>
        <p>Edit Profile</p>
        <span>></span>
      </a>
      <a href="#" class="sub-menu-link">
        <i class="fa-regular fa-address-book"></i>
        <p>Address</p>
        <span>></span>
      </a>
      <a href="#" class="sub-menu-link">
        <i class="fa-solid fa-headset"></i>
        <p>Help & Support</p>
        <span>></span>
      </a>
      <a href="#" class="sub-menu-link">
        <i class="fa-solid fa-right-from-bracket"></i>
        <p>Logout</p>
        <span>></span>
      </a>
    </div>
  </div>
</template>

<script >



export default {
    data(){
        return {
            isLogged:false
        }
    },
    methods:{
   toggleMenu(){
    this.isLogged=!this.isLogged;
   }
    }
}
</script>
