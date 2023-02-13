<!-- <link rel="stylesheet" href="./style.css"> -->
<style>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background: url('bg1.jpg') no-repeat; */
  background-size: cover;
  background-position: center;
  margin-top: -50px;
  /* animation: animateBg 5s linear infinite; */
}

@keyframes animateBg {
  100% {
    filter: hue-rotate(360deg);
  }
}

.login-box {
  position: relative;
  width: 450px;
  height: 450px;
  background: transparent;
  /* background: #777575; */
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}

h2 {
  font-size: 2rem;
  color: white;
  text-align: center;
}

.input-box {
  position: relative;
  width: 310px;
  margin: 30px;
  border-bottom: 2px solid white;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1rem;
  color: white;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px;
}

.input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: white;
  padding: 0 70px 0 5px;
}

.input-box .icon {
  position: absolute;
  right: 8px;
  color: white;
  font-size: 1.2rem;
  line-height: 57px;
}

.input-box .icon-eye {
  position: absolute;
  right: 35px;
  color: white;
  font-size: 1.2rem;
  line-height: 57px;
}

.remember-forgot {
  margin: -15px 25px 15px 30px;
  font-size: 0.9em;
  color: white;
  display: flex;
  justify-content: space-between;
}

.remember-forgot label input {
  margin-right: 3px;
}

.remember-forgot a {
  color: white;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

button {
  margin: 0 10%;
  width: 80%;
  height: 40px;
  background: white;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  color: black;
  font-weight: 500;
}

.register-link {
  font-size: 0.9em;
  color: white;
  text-align: center;
  margin: 20px 0 10px;
}

.register-link p a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.register-link p a:hover {
  text-decoration: underline;
}

@media (max-width: 430px) {
  .login-box {
    width: 100%;
    height: 100vh;
    border: none;
    border-radius: 0;
  }

  .input-box {
    width: 290px;
  }
}
</style>

<template>
  <section>
    <div class="login-box bg-dark">
      <form action="" @submit.prevent="setPost">
        <h2>Login</h2>
        <div class="input-box">
          <span class="icon"> <i class="fas fa-envelope"></i> </span>
          <input type="email" required v-model="postData.email" />
          <label>E-Mail</label>
        </div>
        <div class="input-box">
          <span class="icon"> <i class="fas fa-lock"></i></span>
          <input type="password" required v-model="postData.password" />
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label> <input type="checkbox" /> Remember me </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div class="register-link">
          <p>
            Don't have an account?
            <router-link to="/signup">Register here</router-link>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
   async setPost() {
     await fetch(
        `http://localhost:5039/api/Login/login?email=${this.postData.email}&password=${this.postData.password}`
      )
        .then((response) => response.text())
        .then((data) =>{ localStorage.setItem("user-info", data);
        this.$router.push({ name: "Home" });}).catch(()=>{
          alert("Something Went Wrong!");
        });      
    },
  },
};
</script>
