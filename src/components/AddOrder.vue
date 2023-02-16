<style scoped>
.row {
  justify-content: center;
  widows: 1000px;
}

.container {
  width: 100%;
  max-width: 650px;
  padding: 0 auto;
  margin: 14px 28px 10px 291px;
  border: 2px solid white;
  align-items: center;
}

h2 {
  display: flex;
  align-self: center;
  font-size: 45px;
  font-weight: 800;
  font-style: oblique;
  padding: 0 90px;
  text-shadow: 2px 2px #ff0000;
}

label {
  font-size: 25px;
  font-weight: 600;
  font-style: oblique;
  padding: 0 auto;
}

.container submit a{
    text-decoration: none;
    font-size: 20px;
    color: black;

}
</style>
<template>
  <div class="container">
    <form action="#" @submit.prevent="addOrder">
      <h2>Place Order Here</h2>
      <div class="col-md-12">
        <label for="inputName4" class="form-label">FoodName</label>
        <input
          type="text"
          v-model="postData.FoodName"
          class="form-control"
          id="inputName4"
          disabled
        />
      </div>
      <div class="col-md-12">
        <label for="inputQuantity2" class="form-label">Quantity</label>
        <input
          type="number"
          v-model="postData.Quantity"
          class="form-control"
          id="inputQuantity2"
        />
      </div>
      <div class="col-md-12">
        <label for="inputPrice4" class="form-label">Price</label>
        <input
          type="number"
          v-model="postData.Price"
          class="form-control"
          id="inputPrice4"
          disabled
        />
      </div>
      <div class="col-md-12">
        <label for="Total" class="form-label">Total : {{ Total}}</label>
        

        <div class="col-md-12">
          <button type="submit" class="btn btn-dark">
           Add Order 
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postData: {
        FoodId: "",
        FoodName: "",
        Quantity: 1,
        Price: "",
      },
    };
  },
  props:["id"],
  computed:{
       Total(){
        return this.postData.Price* this.postData.Quantity;
       }
  },
  methods: {
   fetchFood(){
      fetch(`http://localhost:5250/api/Restaurent/${this.id}`)
        .then((response) => response.json())
        .then((data) =>{
          this.postData.FoodName=data.FoodName;
          this.postData.Price=data.Price;
        });
    },
    addOrder() {
      const data = JSON.stringify({
      
        FoodName: this.postData.FoodName,
        Quantity: this.postData.Quantity,
        Price: this.postData.Price,
        Total:this.Total        
      });

      window.console.log(data);
      fetch("http://localhost:5250/api/Restaurent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  mounted(){
    
this.fetchFood();
  }
};
</script>
