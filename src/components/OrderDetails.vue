<template>
  <div class="container">
    <h3 style="text-align: center">Order Details</h3>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">FoodName</th>

          <th scope="col">Quantity</th>

          <th scope="col">Price</th>

          <th scope="col">Total</th>

          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="order in placeorders" v-bind:key="order.orders">
          <td>{{ order.FoodName }}</td>
          <td><input v-model="order.Quantity" /></td>

          <td>{{ order.Price }}</td>

          <td>{{ order.Price * order.Quantity }}</td>
          <td>
            <button @click="updatePost(order)">
              <i class="fa-regular fa-pen-to-square"></i></button
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button v-on:click="cancelOrder(order)"><i class="fa-solid fa-xmark"></i></button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "AddOrder",
  data() {
    return {
      placeorders: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:5295/api/Order");
      const finalRes = await res.json();
      this.placeorders = finalRes;
    },
    cancelOrder(order) {
      console.log(order);
      fetch(`http://localhost:5295/api/Order/${order.OrderId}`, {
      method: "PUT"
      })
      .then((response) => response.json())
      .then((data) =>{
        
        console.log(data);
        alert("Order Canceled");
        this.$router.push({ name: "RestaurantDetails" });}).catch(()=>{
        alert("Something Went Wrong!");
      });
    },
    updatePost(order) {
      fetch(`http://localhost:5295/api/Order/${order.OrderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  mounted: function () {
    this.getData();
    // this.deleteOrder();
    //this.UpdatePost();
  },
  props: ["id"],
  computed: {
    Total() {
      return this.postData.Price * this.postData.Quantity;
    },
  },
};
</script>
<style scoped>
h3 {
  text-align: "center";
  padding-top: 1px;
}
.container {
  width: 500%;
  max-width: 1000px;
  background: transparent;
  padding: 0 auto;
  margin: 10px 10px 10px 250px;
  border: 2px solid white;
  align-items: center;
}
.table {
  color: aliceblue;
}

button {
  border: none;
  width: 30px;
  height: 30px;
}
</style>
