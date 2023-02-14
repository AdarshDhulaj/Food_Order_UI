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
    <form>
    <div class="row mb-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number">
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Pin Code" aria-label="Pincode">
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="State" aria-label="state">
  </div>
  <div class="col ">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="House Number" aria-label="Hnumber">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Colony" aria-label="colony">
  </div>
</div>
<div class="row mb-3">
    <div class="col">
        <select id="typeofaddress" class="form-select">
        <option selected>Select Address Type</option>
      <option>Home</option>
      <option>Work</option>
    </select>
    </div>
    <div class="col">   </div>
</div>
</form>
</div>
</template>