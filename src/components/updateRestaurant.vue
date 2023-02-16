<template>
    <div class="addrest w-50">
      <form action="#" >
        <h2>Update Restaurant Details</h2>
        <div class="col-md-12">
          <label for="inputName4" class="form-label">Restaurant Name</label>
          <input
            type="text"
            v-model="postData.Name"
            class="form-control mb-3"
            id="inputName4"
            placeholder="Enter Restaurent Name"
          />
        </div>
        <div class="col-md-12">
          <label for="inputOwner2" class="form-label">Owner Name</label>
          <input
            type="text"
            v-model="postData.Owner"
            class="form-control mb-3"
            id="inputOwner2"
            placeholder="Enter Owner Name"
          />
        </div>
        <div class="col-md-12">
          <label for="inputAddress4" class="form-label">Address</label>
          <input
            type="text"
            v-model="postData.Address"
            class="form-control mb-3"
            id="inputAddress4"
            placeholder="Location :- City, Street"
          />
        </div>
        <div class="col-md-12">
          <label for="inputOpenTime" class="form-label">Open Time</label>
          <input
            type="time"
            v-model="postData.OpenTime"
            class="form-control mb-3"
            id="inputOpenTime"
          />
        </div>
        <div class="col-md-12">
          <label for="inputCloseTime" class="form-label">Close Time</label>
          <input
            type="time"
            v-model="postData.CloseTime"
            class="form-control mb-3"
            id="inputCloseTime"
          />
        </div>
        <div class="col-md-12 mb-3">
          <label for="inputCategory" class="form-label"
            >Restaurant Category:</label
          >
          <select
            id="inputCategory"
            v-model="postData.Category"
            class="form-select"
          >
            <option selected>Choose...</option>
            <option>Fast Food and Cafe</option>
            <option>Veg Restaurant</option>
            <option>Non-veg Restaurant</option>
            <option>Family style</option>
            <option>Casual Dining</option>
          </select>
        </div>
        <div class="col-md-12 mb-3">
          <label class="col-sm-12 mb-2">Restaurant Status: </label>
          <div class="col-sm-12">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                v-model="postData.Flag"
                type="radio"
                name="inlineRadioOptions"
                id="OpenNow"
                value="OpenNow"
              />
              <label class="form-check-label" for="OpenNow">Open Now</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                v-model="postData.Flag"
                type="radio"
                name="inlineRadioOptions"
                id="Closed"
                value="Close"
              />
              <label class="form-check-label" for="Closed"> Closed</label>
            </div>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" v-on:click="updateResto" class="btn btn-dark"><router-link to="/RestaurantDetails">Update Restaurant</router-link> </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      postData: {
        Name: "",
        Address: "",
        Owner: "",
        OpenTime: "",
        CloseTime: "",
        Category: "",
        Flag: "",
      },
    };
  },
  methods: {
    async fetchResto(){
      await fetch(`http://localhost:5250/api/Restaurent/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) =>{
            
          this.postData.Name=data.Name;
          this.postData.Address=data.Address;
          this.postData.Owner=data.Owner;
          this.postData.OpenTime=data.OpenTime;
          this.postData.CloseTime=data.CloseTime;
          this.postData.Category=data.Category;
          this.postData.Flag=data.Flag;
        });
    },
    updateResto(){
        const data = JSON.stringify({
    
        Name: this.postData.Name,
        Address: this.postData.Address,
        Owner: this.postData.Owner,
        OpenTime: this.postData.OpenTime,
        CloseTime: this.postData.CloseTime,
        Category: this.postData.Category,
        Flag: this.postData.Flag,
      });
      window.console.log(data);
      fetch(`http://localhost:5250/api/Restaurent/${this.$route.params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: data,
      })
        .then((response) => response.json())
        .then((data) =>{
          console.log(data);
          alert("Restaurant Details Updated successfully..");
          this.$router.push({ name: "RestaurantDetails" });}).catch(()=>{
          alert("Something Went Wrong!");
        });
      } 
  },
  mounted(){
    console.log(this.$route.params.id)
    this.fetchResto();
  }
  };
  </script>
  <style scoped>
  
  .row {
    justify-content: center;
    widows: 1000px;
  }
  .addrest {
    /* max-width: 600px; */
    background: transparent;
    padding: 28px;
    margin: 30px;
    border-radius: 10px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.699);
  }

  form{
    width: 500px;
  }
  .img,
  svg {
    height: none;
  }
  </style>
  