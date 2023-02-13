<style>
.container {
  width: 100%;
  max-width: 650px;
  background: transparent;
  padding: 28px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid white;
}

.form-title {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 6px;
  color: white;
  text-shadow: 2px 2px 2px black;
  border-bottom: solid 1px white;
}

.main-user-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
}

.user-input-box:nth-child(2n) {
  justify-content: end;
}

.user-input-box {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-bottom: 15px;
}

.user-input-box label {
  width: 95%;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0;
}

.user-input-box input {
  height: 40px;
  width: 95%;
  border-radius: 7px;
  outline: none;
  border: 1px solid grey;
  padding: 0 10px;
}

.gender-title {
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid white;
}

.gender-category {
  margin: 15px 0;
  color: white;
}

.gender-category label {
  padding: 0 20px 0 5px;
}

.gender-category label,
.gender-category input,
.form-submit-btn input {
  cursor: pointer;
}

.form-submit-btn {
  margin-top: 40px;
}

.form-submit-btn input {
  display: block;
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  color: rgb(209, 209, 209);
  background: rgba(63, 114, 76, 0.7);
}

.form-submit-btn input:hover {
  background: rgba(56, 204, 93, 0.7);
  color: rgb(255, 255, 255);
}

@media (max-width: 600px) {
  .container {
    min-width: 280px;
  }

  .user-input-box {
    margin-bottom: 12px;
    width: 70%;
  }

  .user-input-box:nth-child(2n) {
    justify-content: space-between;
  }

  .gender-category {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .main-user-info {
    max-height: 450px;
    overflow: auto;
  }

  .main-user-info::-webkit-scrollbar {
    width: 0;
  }
}
</style>

<template>
  <div class="container bg-dark">
    <h1 class="form-title">Registration</h1>
    <form action="#" @submit.prevent="setPost">
      <div class="main-user-info">
        <div class="user-input-box">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Full Name"
            v-model="postData.name"
          />
        </div>
        <div class="user-input-box">
          <label for="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            v-model="postData.email"
          />
        </div>
        <div class="user-input-box">
          <label for="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            v-model="postData.password"
          />
        </div>
        <div class="user-input-box">
          <label for="confirmpassword">Confirm password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm password"
          />
        </div>
        <div class="user-input-box">
          <label for="mobileNo">Phone Number</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            placeholder="Enter Phone Number"
            v-model="postData.mobileNo"
          />
        </div>
        <div class="user-input-box">
          <label for="address">address</label>
          <input
            type="textarea"
            id="address"
            name="address"
            placeholder="Enter address"
            v-model="postData.address"
          />
        </div>
        <div class="gender-details-box">
          <span class="gender-title">Gender</span>
          <div class="gender-category">
            <input type="radio" name="gender" id="male"  v-model="postData.gender"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female"  v-model="postData.gender"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other"  v-model="postData.gender"/>
            <label for="other">Other</label>
          </div>
        </div>
      </div>
      <div class="form-submit-btn">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
</template>

<script >
export default {
  data() {
    return {
      postData: {
        name:'',
        email:'',
        password:'',
        mobileNo:'',
        address:'',
        gender:''
      },
    };
  },
  methods: {
    setPost() {
      const data=JSON.stringify({
          name:this.postData.name,
        email:this.postData.email,
        password:this.postData.password,
        mobileNo:this.postData.mobileNo,
        address:this.postData.address,
        gender:this.postData.gender
        });
      window.console.log(data);
      fetch("http://localhost:5039/api/Login/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:data
      })
      .then((response) => response.json())
      .then(data => console.log(data));
    },
  },
};
</script>
