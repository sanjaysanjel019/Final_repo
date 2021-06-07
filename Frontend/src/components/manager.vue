<template>
  <div class="inner-block2">
    <div class="vue-tempalte">
      <form class="formcolor" @submit.prevent>
        <div class="form-group">
          <label class="textstyles">Enter Your Username</label>
          <input
            type="username"
            class="form-control form-control-lg"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label class="textstyles">Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="password"
          />
        </div>

        <button
          id="textstyles"
          @click="logInUser"
          class="btn btn-dark btn-lg btn-block"
        >
          SIGN IN AS MANAGER
        </button>

        <h3 v-if="errd">{{ errMsg }}</h3>
        <h3 v-if="success">Please Wait, Logging in ...</h3>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password" style="color: #fff"
            >Forgot password ?</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  components: {},
  data() {
    return {
      username: null,
      password: null,
      isAlertBtn: false,
      userData: null,
      url: "http://127.0.0.1:3000/user/login",
      errd: null,
      success: null,
      isLoggedIn: false,
      fullName: null,
      errMsg: null,
    };
  },
  methods: {
    async logInUser() {
      this.userData = await axios
        .post(this.url, {
          username: this.username,
          password: this.password,
        })
        .then(
          (data) => {
            if (data.data.statusCode == 200) {
              if (data.data.data.user.role == "driver") {
                this.isLoggedIn = false;
                alert("You are not authorised to login as a manager");
              } else {
                this.isLoggedIn = true;
                this.success = data.data.statusCode;
                this.fullName = data.data.data.user.username;
              }
            } else if (data.data.err.statusCode) {
              this.errd = data.data.err.statusCode;
              this.errMsg = data.data.err.message;
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
        name: "manager-dashboard",
        params: { userId: this.fullName },
      });
    },
  },
};
</script>
<style>
body {
  background-color: white;
}
</style>
