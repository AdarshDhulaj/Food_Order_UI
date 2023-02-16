<style scoped>
img,
svg {
  vertical-align: middle;
  /* height: 150px;*/
}

.div1 {
  background: lightseagreen;
}
.div1 p {
  color: white;
  background-color: lightseagreen;
  font-weight: 800;
  font-size: 30px;
  padding: 20px 0px 0 21px;
}

.form-control{
  max-width: 500px;
}

.FoodItems {
  margin: 5px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
  /* border: 1px solid white; */
  border-radius: 10px;
}

.FoodItems .foods {
  
  /* margin: 1rem; */
  border-radius: 10px;
  text-decoration: none;
}

.FoodItems .foods:hover {
  /* border: 3px solid white; */
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background: lightseagreen;
  color: black;
}

.FoodItems .foods button {
  border: 1px solid black;
  border-radius: 20px;
  font-size: 20px;
}

.FoodItems .foods button a {
  text-decoration: none;
  color: black;
}

.FoodItems .foods .desc {
  margin: 10px 20px;
}

.FoodItems .foods .name {
  display: inline-block;
}

img {
  padding: 5px;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.name .cost {
  display: inline-block;
}
.name {
  font-size: 20px;
  display: start;
  padding: 0 40px;
}

.cost {
  display: end;
  padding-top: -100px;
  padding-left: 220px;
}

.desc {
  display: flex;
  padding-left: 40px;
}
button:hover {
  border: 1px solid black;
}

@media (max-width: 700px) {
  .FoodItems {
    margin: 18px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    border: 0.2px solid white;
    border-radius: 10px;
  }
}
@media (max-width: 390px) {
  .div1 p {
    color: white;
    background-color: lightseagreen;
    font-weight: 200;
    font-size: 18px;
    padding: 20px 0 0 10px;
  }
  .FoodItems {
    margin: 18px;
    padding: 0px;
    display: grid;
    grid-template-columns: 353px;
    color: white;
    border: 0.2px solid white;
    border-radius: 10px;
  }

  .FoodItems .foods {
    border: 0.1px solid white;
    margin: 25px;
    padding: 10px;
    border-radius: 10px;
  }

  img {
    padding: 5px;
    border-radius: 20px;
    width: 219px;
    height: 150px;
    object-fit: cover;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    display: flex;
  }

  .cost {
    display: inline-block;
    padding: 0px 176px;
  }
}

.desc {
  font-size: 13px;
  display: flex;
  padding-left: 9px;
}
</style>

<template>
  <div class="div1">
      <input type="search"  v-model="searchKey" class="form-control me-2" placeholder="Search" required />

    <p class="d-flex justify-content-left">Welcome To The FoodyZone........!</p>
    <div class="FoodItems">
      <div class="foods" v-for="item in listItems" :key="item.foodId">
        <img :src="require('@/Images/' + item.image)"  />
        <div class="name">{{ item.foodName }}</div>
        <div class="name">₹{{ item.price }}</div>
        <div class="desc">{{ item.description }}</div>
        <button v-if="isLoggedIn" @click="addOrder(item.foodId)">Order Now</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      FoodItems: [],
      listItems: [],
      searchKey:"",
      isLoggedIn:false
    };
  },
  methods: {
    addOrder(id){
   this.$router.push({'name':'AddOrder',params:{id:id}});
    },
    async getData(key) {
      const res = await fetch(`http://localhost:5201/api/Search/?name=${key}`);
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
  },
  mounted() {
    this.getData(" ");
    this.isLoggedIn= localStorage.getItem("user-info")!=null &&localStorage.getItem("user-info").length>0;
  },
  watch:{
     searchKey(newValue){
     this.getData(newValue);
    },
    $route:
    {
      deep:true,
      handler(){
        this.isLoggedIn= localStorage.getItem("user-info")!=null &&localStorage.getItem("user-info").length>0;
    }
  }
  }
};
</script>
