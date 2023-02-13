<template>
    <div class="container " >
      <h3>Details Of Restaurant</h3>
  
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-dark">
          <router-link to="/AddRestaurant">Add Restaurant</router-link>
        </button>
      </div>
  
      <table class="table table-striped">
        <thead>
          <tr>
            <!-- <th>Rest Id</th> -->
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
          <tr v-for="rest in restaurentDetails" v-bind:key="rest.rests">
            <!-- <td value="1">{{ rest.RestoId }}</td> -->
            <!-- <td><img src="{{rest.Image}}" alt="" /></td> -->
            <td>{{ rest.Name }}</td>
            <td>{{ rest.Owner }}</td>
            <td>{{ rest.Address }}</td>
            <td>{{ rest.OpenTime }}</td>
            <td>{{ rest.CloseTime }}</td>
            <td>{{ rest.Category }}</td>
            <td>{{ rest.Flag }}</td>
            <td > 
              <div class="icon">
              <button type="button" class="btn btn light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </button>
              <button v-on:click="deleteData(rest.RestoId)" type="button" class="btn btn light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
              </button>
            </div>
            </td>
            <td>
              <button type="button" class="btn btn-dark" ><router-link to="/FoodDetails">Available Food</router-link></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
    export default {
      name:'RestaurentDetails',
      data(){
        return{
          restaurentDetails:[]
        }
      },
      methods:{
        async getData() {
          const res = await fetch("http://localhost:5250/api/Restaurent");
          const finalRes = await res.json();
          this.restaurentDetails = finalRes;
        },
      },
      deleteData(RestoId){
          this.axios.delete("https://localhost:5250/api/Restaurent/"+RestoId).then(()=>{
            this.getData()
          })
        },
      mounted:function(){
        this.getData();
      }
    }
    
  </script>
  
  <style>
  h3 {
    text-align: "center";
    padding-top: 1px;
  }
  .container{
  width: 100%;
  max-width: 1200px;
  /* background: rgba(0, 0, 0, 0.5); */
  background: transparent;
  padding: 28px;
  margin: 0 28px;
  border-radius: 10px;
  border: 2px solid white;
  color:white;
  }
  .icon svg {
    vertical-align: middle;
    height: none;
}
</style>
  