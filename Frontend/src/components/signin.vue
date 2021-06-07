<template>
  <div class="inner-block1">
    <div class="manager">
      <form class="formstyles" @submit.prevent>
        <div class="form-group">
          <label class="textstyles2">Enter Your Username</label>
          <input
            type="username"
            class="form-control form-control-lg"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label class="textstyles2">Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="password"
          />
        </div>

        <button
          id="textstyles"
          @click="loginUser"
          class="btn btn-dark btn-lg btn-block"
        >
          SIGN IN AS DRIVER
        </button>
        <br />

        <h3 v-if="errd === 400">Please enter correct Username and Password</h3>

        <h3 v-else-if="errd === 200">Please Wait, Logging in ...</h3>

        <p class="forgot-password text-right mt-2 mb-4" id="forgottext">
          <router-link to="/forgot-password" id="forgottext"
            >Forgot password ?</router-link
          >
          >
        </p>
      </form>
    </div>
    <loginmessage v-if="isAlertBtn" />
  </div>
</template>


<script>
const axios = require("axios");
import loginmessage from "./loginmessage";
export default {
  components: {
    loginmessage,
  },
  data() {
    return {
      username: null,
      password: null,
      isAlertBtn: false,
      userData: null,
      url: "http://127.0.0.1:3000/user/login",
      errd: null,
      isLoggedIn: false,
      fullName: null,
    };
  },
  methods: {
    async loginUser() {
      this.userData = await axios
        .post(this.url, {
          username: this.username,
          password: this.password,
        })
        .then(
          (data) => {
            if (
              data.data.data.user.role == "manager" ||
              data.data.data.user.role == "employee"
            ) {
              alert("Please sign in as Manager");
              this.isLoggedIn = false;
              return 0;
            }
            if (data.data.statusCode == 200) {
              this.isLoggedIn = true;
              this.isAlertBtn = true;
              this.fullName = data.data.data.user.username;
            }

            if (this.isLoggedIn) {
              setTimeout(() => this.redirectHome(), 2000);
            }
          },
          (error) => {
            console.log("Errors are==>", error);
          }
        );
    },
    redirectHome() {
      this.$router.push({
        name: "driver-dashboard",
        params: { userId: this.fullName },
      });
    },
  },
};
</script>


<style>
</style>
