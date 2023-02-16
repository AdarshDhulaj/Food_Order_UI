<template>
  <div class="container">
    <h3 style="text-align: center">Order Histroy</h3>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">FoodName</th>

          <th scope="col">Quantity</th>

          <th scope="col">Price</th>

          <th scope="col">Total</th>

          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="order in placeorders" v-bind:key="order.orders">
          <td>{{ order.FoodName }}</td>
          <td>{{ order.Quantity }}</td>

          <td>{{ order.Price }}</td>

          <td>{{ order.Total }}</td>
          <td>{{ order.Status }}</td>

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
  },
  mounted: function () {
    this.getData();
  },
  props: ["id"]
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

</style>
