

<template>

    <div class="container">
  
      <h3 style="text-align: center">Order Details</h3>
  
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
       
      </div>
  
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
  
          <tr v-for="order in placeorders " v-bind:key="order.orders">
  
            <td>{{ order.FoodName }}</td>  
            <td>{{ order.Quantity }}</td>
  
            <td>{{ order.Price }}</td>
  
            <td>{{ order.Total }}</td>
            <td><button type="button" class="btn btn-dark">Update
            </button></td>       
            <td>
            </td>
  
          </tr>  
      </tbody>
      </table>
  
    </div>
  </template>
  <script>
  export default {
    name: 'AddOrder',
    data() {
      return {
        placeorders: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("http://localhost:5295/api/Order");
        const finalRes = await res.json(); this.placeorders = finalRes;
        
      },
  //     deleteOrder ( { FoodId }) {
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`http://localhost:5295/api/Order${FoodId}`).then(response => {
  //       resolve(response)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  //       updatePost() {
  //       fetch("http://localhost:5295/api/Order", {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           Email: this.Email,
  //             FoodId: this.FoodId,
  //             RestoId: this.RestoId,
  //             Quantity: this.Quantity,
  //             Price: this.Price,
  //         }),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));
  //     },
  //   },
    },
    mounted: function () 
    { 
      this.getData();
     // this.deleteOrder();
     //this.UpdatePost();
     }
  }
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
      padding:0 auto;
      margin: 10px 10px 10px 250px;
      border: 2px solid white;
      align-items: center;
  }
  .table
  {
  color: aliceblue;
  }
  
  </style>
  