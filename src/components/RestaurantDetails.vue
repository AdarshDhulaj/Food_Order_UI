<template>
  <div class="container">
    <h3>Details Of Restaurant</h3>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-dark">
        <router-link to="/AddRestaurant">Add Restaurant</router-link>
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <!-- <th scope="col">Image</th> -->
          <th scope="col">Name</th>
          <th scope="col">Owner Name</th>
          <th scope="col">Address</th>
          <th scope="col">Open Time</th>
          <th scope="col">Close Time</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
          <th scope="col">Add Food</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rest in restaurentDetails" v-bind:key="rest.RestoId">
          <!-- <td><img src="{{rest.Image}}" alt="" /></td> -->
          <td>{{ rest.Name }}</td>
          <td>{{ rest.Owner }}</td>
          <td>{{ rest.Address }}</td>
          <td>{{ rest.OpenTime }}</td>
          <td>{{ rest.CloseTime }}</td>
          <td>{{ rest.Category }}</td>
          <td>{{ rest.Flag }}</td>
          <td>
            <div class="icon">
              <button type="button" class="btn btn light mr-1">
                <router-link :to="`/UpdateRestaurant/` + rest.RestoId"
                  ><i class="fa-regular fa-pen-to-square"></i
                ></router-link>
              </button>
              <button
                @click="deleteResto(rest)"
                type="button"
                class="btn btn light mr-1"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-dark mb-1">
              <router-link to="/FoodDetails">Available Food</router-link>
            </button>
            <button
              type="button"
              class="btn btn-dark"
            ><router-link :to="`/AddFood/` + rest.RestoId"
                  >Add Food</router-link></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RestaurentDetails",
  data() {
    return {
      restaurentDetails: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:5250/api/Restaurent");
      const finalRes = await res.json();
      this.restaurentDetails = finalRes;
    },
    deleteResto(rest) {
      console.log(rest);
      fetch(`http://localhost:5250/api/Restaurent/${rest.RestoId}`, {
      method: "DELETE"
      })
      .then((response) => response.json())
      .then((data) =>{
        
        console.log(data);
        alert("Restaurant Deleted successfully..");
        this.$router.push({ name: "RestaurantDetails" });}).catch(()=>{
        alert("Something Went Wrong!");
      });
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
.container {
  width: 100%;
  max-width: 1200px;
  /* background: rgba(0, 0, 0, 0.5); */
  background: transparent;
  padding: 28px;
  margin: 0 28px;
  border-radius: 10px;
  border: 2px solid white;
  color: white;
}
.icon svg {
  vertical-align: middle;
  height: none;
}
</style>
