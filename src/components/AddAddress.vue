
<style scoped>
.container{
    align-items: center;
}
form{
    max-width: 600px;
    margin: 10px 0;
}
</style>

<template>
    <div class="container">
    <form @submit.prevent="setPost">
    <div class="row mb-3">
  <div class="col">
    <input v-model="postData.FName" type="text" class="form-control" placeholder="First name" aria-label="First name"  >
  </div>
  <div class="col">
    <input v-model="postData.LName" type="text" class="form-control" placeholder="Last name" aria-label="Last name"  >
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input v-model="postData.Number" type="text" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number"  >
  </div>
  <div class="col">
    <input  v-model="postData.PinCode" type="number" class="form-control" placeholder="Pin Code" aria-label="PinCode"  >
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input v-model="postData.State" type="text" class="form-control" placeholder="State" aria-label="State"  >
  </div>
  <div class="col ">
    <input v-model="postData.City" type="text" class="form-control" placeholder="City" aria-label="City"  >
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input v-model="postData.HouseNo" type="text" class="form-control" placeholder="House Number" aria-label="HouseNo"  >
  </div>
  <div class="col">
    <input v-model="postData.Colony" type="text" class="form-control" placeholder="Colony" aria-label="Colony"  >
  </div>
</div>
<div class="row mb-3">
    <div class="col">
        <select v-model="postData.TypeofAdd" id="typeofaddress" class="form-select" >
        <option selected>Select Address Type</option >
      <option>Home</option>
      <option>Work</option>
    </select>
    </div>
    <div class="col">   </div>
</div>
<div class="row mb-3">
    <input class="btn btn-primary" type="submit" value="Save">
</div>
</form>
</div>
</template>

<script >
export default {
  data() {
    return {
      postData: {
        FName: "",
        LName: "",
        Number: "",
        PinCode: "",
        State: "",
        City: "",
        HouseNo: "",
        Colony: "",
        TypeofAdd:""
      },
    };
  },
  methods: {
    async setPost() {
      const data = JSON.stringify({
        FName: this.postData.FName,
        LName: this.postData.LName,
        Number: this.postData.Number,
        PinCode: this.postData.PinCode,
        State: this.postData.State,
        City: this.postData.City,
        HouseNo: this.postData.HouseNo,
        Colony: this.postData.Colony,
        TypeofAdd: this.postData.TypeofAdd,
      });
    //   document.console.log(data)
         await fetch("http://localhost:5295/api/Address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.value == 201){
                console.log(data);
            alert("Address Saved...");
            this.$router.push({ name: "Home" });
            }
            else{
                console.log(data);
                alert("something went wrong");
            }
           
          });
    },
  },
};
</script>