<style>
form {
  width: 500px;
  margin: 10px;
  padding: 10px;
  align-self: flex-end;
}

form .form-group {
  display: inline-block;
  padding: 10px;
}
</style>

<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="email4">Email</label>
        <input
          type="email"
          class="form-control"
          id="email4"
          placeholder="Email"
          disabled
        />
      </div>
      <div class="form-group col-md-6">
        <label for="mobileno">Mobile No</label>
        <input
          type="text"
          class="form-control"
          id="mobileno"
          placeholder="Mobile Number"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="firstname">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          placeholder="FirstName"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          placeholder="LastName"
        />
      </div>
    </div>
    <div class="form-group col-md-8">
      <span class="gender-title">Gender</span>
      <div class="gender-category">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          v-model="postData.gender"
          required
        />
        <label for="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          v-model="postData.gender"
          required
        />
        <label for="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          v-model="postData.gender"
          required
        />
        <label for="other">Other</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      postData: {
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        address: "",
        gender: "",
      },
    };
  },
  methods: {
    setPost() {
      const data = JSON.stringify({
        name: this.postData.name,
        email: this.postData.email,
        password: this.postData.password,
        mobileNo: this.postData.mobileNo,
        address: this.postData.address,
        gender: this.postData.gender,
      });
      window.console.log(data);
      fetch("http://localhost:5039/api/Login/register", {
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
};
</script>
