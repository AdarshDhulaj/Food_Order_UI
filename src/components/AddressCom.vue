<template>
  <div class="container">
    <div class="d-grid col-3 mx-auto ">
      <button type="button" class="btn btn-outline-danger">
        <router-link to="/addaddress">Add Address</router-link>
      </button>
    </div>
    <h3 style="text-align: center">Address</h3>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Full Name</th>

          <th scope="col">Mobile Number</th>

          <th scope="col">Address</th>

          <th scope="col">Address Type</th>

          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="address in addressess" v-bind:key="address.Id">
          <td>{{ address.FName }} {{ address.LName }}</td>
          <td>{{ address.number }}</td>

          <td>
            {{ address.HouseNo }} {{ address.Colony }} {{ address.City }}
            {{ address.State }} {{ address.PinCode }}
          </td>

          <td>{{ address.TypeofAdd }}</td>

          <td>
            <button @click="updatePost(order)">
              <i class="fa-regular fa-pen-to-square"></i></button
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><i class="fa-solid fa-xmark"></i></button>
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
      addressess: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:5295/api/Address");
      const finalRes = await res.json();
      this.addressess = finalRes;
    },
  },
  mounted: function () {
    this.getData();
  },
};
</script>

<style scoped>
h3 {
  text-align: "center";
  padding-top: 1px;
}

.btn {
  width: 100%;
}

.btn a{
    text-decoration: none;
    color: white;
    font-size: 20px;
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
