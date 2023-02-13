<style>
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
  /* border: 1px solid white; */
  margin: 25px;
  padding: 10px;
  border-radius: 10px;
}

.FoodItems .foods:hover {
  /* border: 3px solid white; */
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  background: lightseagreen;
  color: black;
}

img {
  padding: 5px;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.name {
  font-size: 20px;
  display: flex;
  padding-left: 40px;
}

.cost {
  display: flex;
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
    padding-left: 40px;
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
    <p class="d-flex justify-content-left">Welcome To The FoodyZone........!</p>
    <div class="FoodItems">
      <div class="foods" v-for="item in listItems" :key="item.items">
        <img src="{{ item.Image }} " alt="" />
        <div class="name">{{ item.FoodName }}</div>
        <div class="cost">₹{{ item.Price }}</div>
        <div class="desc">{{ item.Description }}</div>
        <span class="more">more...</span>
        <button v-on:click="OrderItNow(food)">Order Now</button>
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
    };
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:5250/api/Foods");
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
  },
  // mounted() {
  //   this.getData();
  // },
};

</script>
