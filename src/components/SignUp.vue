
<template>
  <div class="container bg-dark">
    <h1 class="form-title">Registration</h1>
    <form action="#" @submit.prevent="setPost">
      <div class="main-user-info">
        <div class="user-input-box">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter First Name"
            v-model="postData.fname"
            required
          />
        </div>
        <div class="user-input-box">
          <label for="lName">LastName</label>
          <input
            type="textarea"
            id="lName"
            name="lName"
            placeholder="Enter last Name"
            v-model="postData.lName"
            required
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
            required
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
            required
          />
        </div>
        <div class="user-input-box">
          <label for="confirmpassword">Confirm password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm password"
            v-model="postData.cpassword"
            required
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
            required
          />
        </div>
        <div class="gender-details-box">
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
      </div>
      <div class="form-submit-btn">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: {
        fname: "",
        email: "",
        password: "",
        cpassword: "",
        mobileNo: "",
        address: "",
        gender: "",
      },
    };
  },
  methods: {
    async setPost() {
      const data = JSON.stringify({
        fname: this.postData.fname,
        lName: this.postData.lName,
        email: this.postData.email,
        password: this.postData.password,
        mobileNo: this.postData.mobileNo,
        gender: this.postData.gender,
      });
      window.console.log(this.postData.password);
      window.console.log(this.postData.cpassword);

      if (this.postData.password == this.postData.cpassword) {
        var result = await fetch("http://localhost:5039/api/Login/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert("Ragistered Successfully...");
            this.$router.push({ name: "/login" });
          });
      } else {
        alert("Confirm password didn’t match. Try again.");
      }

      localStorage.setItem("user-info", JSON.stringify(result.data));
    },
  },
};
</script>

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

