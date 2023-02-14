<template>
    <div class="addrest">
      <form action="#" @submit.prevent="setPost">
        <h2>Add Restaurant Details</h2>
        <div class="col-md-6">
          <label for="inputImage4" class="form-label">Restaurant Image</label>
          <!-- <img class="uploading-image" /> -->
          <input
            type="file"
            v-bind="postData.Image"
            class="form-control"
            id="inputImage4"
          />
        </div>
        <!-- <div class="col-md-6">
                <label for="images" class="form-label">Restaurant Images:</label>
                <input type="image" v-model="postData.Image" class="form-control" id="images"  >
            </div> -->
        <div class="col-md-6">
          <label for="inputName4" class="form-label">Restaurant Name</label>
          <input
            type="text"
            v-model="postData.Name"
            class="form-control"
            id="inputName4"
            placeholder="Enter Restaurent Name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputOwner2" class="form-label">Owner Name</label>
          <input
            type="text"
            v-model="postData.Owner"
            class="form-control"
            id="inputOwner2"
            placeholder="Enter Owner Name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress4" class="form-label">Address</label>
          <input
            type="text"
            v-model="postData.Address"
            class="form-control"
            id="inputAddress4"
            placeholder="Location :- City, Street"
          />
        </div>
        <div class="col-md-6">
          <label for="inputOpenTime" class="form-label">Open Time</label>
          <input
            type="time"
            v-model="postData.OpenTime"
            class="form-control"
            id="inputOpenTime"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCloseTime" class="form-label">Close Time</label>
          <input
            type="time"
            v-model="postData.CloseTime"
            class="form-control"
            id="inputCloseTime"
          />
        </div>
        <div class="col-md-6">
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
        <div class="col-md-6">
          <label class="col-sm-12">Restaurant Status: </label>
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
          <button type="submit" class="btn btn-dark">Add Restaurant</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      postData: {
        Image: "",
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
    setPost() {
      const data = JSON.stringify({
        Image: this.postData.Image,
        Name: this.postData.Name,
        Address: this.postData.Address,
        Owner: this.postData.Owner,
        OpenTime: this.postData.OpenTime,
        CloseTime: this.postData.CloseTime,
        Category: this.postData.Category,
        Flag: this.postData.Flag,
      });
      window.console.log(data);
      fetch("http://localhost:5250/api/Restaurent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      })
        .then((response) => response.json())
        .then((data) =>{
          console.log(data);
          alert("Restaurant Added successfully..");
          this.$router.push({ name: "RestaurantDetails" });}).catch(()=>{
          alert("Something Went Wrong!");
        });
      }
  },
  };
  </script>
  <style scoped>
  .row {
    justify-content: center;
    widows: 1000px;
  }
  .addrest {
    width: 100%;
    max-width: 1233px;
    /* background: rgba(0, 0, 0, 0.5); */
    background: transparent;
    padding: 28px;
    margin: 0 28px;
    border-radius: 10px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.699);
    /* box-shadow: inset -2px 2px 2px white; */
  }
  .img,
  svg {
    height: none;
  }
  </style>
  