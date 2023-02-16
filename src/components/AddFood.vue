<template>
    <div class="foodtable">
      <div class="container ">
          <form action="#" @submit.prevent="addFood">
              <h2>Add Food Details</h2>
              <!-- <div class="col-md-6">
                  <label for="inputId4" class="form-label">RestaurantId</label>
                  <input type="text" v-model="postData.RestoId" class="form-control" id="inputId4">
                  </div> -->
              <div class="col-md-6">
                  <label for="files" class="form-label">Food Images:</label>
                  <input type="file" ref="fileRef" @change="uploadFile" class="form-control" id="files" multiple >
              </div>
              <div class="col-md-6">
              <label for="inputName4" class="form-label">Food Name</label>
              <input type="text" v-model="postData.FoodName" class="form-control" id="inputName4">
              </div>
              <div class="col-md-6">
              <label for="inputDescription2" class="form-label">Description</label>
              <input type="text" v-model="postData.Description" class="form-control" id="inputDescription2">
              </div>
              <div class="col-md-6">
              <label for="inputPrice4" class="form-label">Price</label>
              <input type="text" v-model="postData.Price" class="form-control" id="inputPrice4" >
              </div>
              <div class="col-md-6">
              <label for="inputCategory" class="form-label">Food Category:</label>
              <select id="inputCategory" v-model="postData.Category" class="form-select">
                  <option selected>Choose...</option>
                  <option>Veg </option>
                  <option>Non-veg </option>
              </select>
              </div>
              <div class="col-md-6">
                  <label class="col-sm-12">Food Status: </label>
                  <div class="col-sm-12">
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="postData.Flag" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Available">
                          <label class="form-check-label" for="inlineRadio1">Available</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="postData.Flag" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Notavailable">
                          <label class="form-check-label" for="inlineRadio2">Not Available</label>
                      </div>
                  </div>
              </div>
              <div class="col-12" >
                  <button type="submit" class="btn btn-dark" >Add Food</button>
              </div>
      </form>
    </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        postData: {
          RestoId:'',
          Image:'',
          FoodName:'',
          Description:'',
          Price:'',
          Category:'',
          Flag:''

        },
      };
    },
    methods: {
      addFood() {
        
        const data = JSON.stringify({
              RestoId:this.postData.RestoId,
              Image:this.$refs.fileRef.files[0].name,
              FoodName:this.postData.FoodName,
              Description:this.postData.Description,
              Price:this.postData.Price,
              Category:this.postData.Category,
              Flag:this.postData.Flag
        });
        window.console.log(data);
        fetch("http://localhost:5250/api/Foods", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
          console.log(data)
          alert("Food Added successfully..")
          this.$router.push({ name: "FoodDetails" });
        }).catch(()=>{
          alert("Something Went Wrong!");
        });
      },
    }
  }
  </script>
  <style>
  h3 {
    /*text-align: "center";
    padding-top: 0 10px;
     align-self: flex-start; */
    width: 364px;
    font-weight: 900;
    font-style: oblique;
    padding-top: 1px;
    width: 364px;
    display: block;
    font-size: 1.6em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .container{
      width: 100%;
      max-width: 700px;
    
      background: transparent;
      padding: 28px;
     
      border-radius: 10px;
      border: 2px solid white;

    
  }
  .foodtable .container{
    background: rgba(0, 0, 0, 0.699);
  }
  .btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
    align-self: flex-end;
    width: 168px;
    /* color: white; */
  }
  </style>

