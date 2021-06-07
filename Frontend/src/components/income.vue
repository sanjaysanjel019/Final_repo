<template>
  <table class="table table-bordered table-hover" style="margin-top: 90px">
    <caption>
      Request for PDF to see more
    </caption>
    <thead
      style="
        text-align: center;
        background-color: #fff;
        color: #44bd32;
        text-align: center;
        border: 2px solid #44bd32;
      "
    >
      <tr style="text-transform: uppercase">
        <th scope="col">Vehicle ID</th>
        <th scope="col">Driver's ID</th>
        <th scope="col">Today's Income</th>
        <th scope="col">Income This Month</th>
      </tr>
    </thead>
    <tbody
      style="
        text-align: center;
        background-color: #44bd32;
        color: #fff;
        border: 2px solid #44bd32;
      "
    >
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.user.id }}</th>
        <td>{{ user.user.name }}</td>
        <td>{{ user.todayIncome }}</td>
        <td>{{ user.totalIncome }}</td>
      </tr>
    </tbody>
  </table>
</template>



<script>
const axios = require("axios");
export default {
  data() {
    return {
      currentUser: null,
      users: [],
    };
  },
  async mounted() {
    await axios.post("http://127.0.0.1:3000/user/current", {
      username: this.$route.params.userId,
    });

    await axios.get("http://127.0.0.1:3000/user/income").then((respon) => {
      this.users = JSON.parse(JSON.stringify(respon.data.data));
      console.log("His suers===>", this.users);
    });
  },
};
</script>

<style>
</style>