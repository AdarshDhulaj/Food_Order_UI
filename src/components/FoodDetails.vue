<template>
    <div class="container ">
      <h3 >Details Of Food</h3>
  
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-dark"  ><router-link to="/AddFood">Add Food</router-link></button>
      </div>
  
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Food Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Is Available</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="food in foodDetails" v-bind:key="food">
              <td>{{food.Image}}</td>
              <td>{{food.FoodName}}</td>
              <td>{{food.Description}}</td>
              <td>{{food.Price}}</td>
              <td>{{food.Category}}</td>
              <td>{{food.Flag}}</td>
              <td>
                <button type="button" class="btn btn light mr-1">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button v-on:click="cancelFood()" type="button" class="btn btn light mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </template>
  
  <script>

  
  export default {
    name:'FoodDetails',
    data(){
      return{
        foodDetails:[]
      }
    },
    methods:{
     async getData(){
      const res = await fetch("http://localhost:5250/api/Foods")
      const finalResult=await res.json();
      this.foodDetails=finalResult;  
      },
      
    },
    mounted:function(){
      this.getData();
    
    }
  }
  </script>
  
  <style scoped>
    h3{
      text-align:"center";
      padding-top:1px;
    }
  </style>
  