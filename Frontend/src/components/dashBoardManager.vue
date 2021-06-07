<template>
  <div class="container-com">
    <div class="one">
      <!--  DIV for whole <main> kind of section -->
      <div class="one-btn">
        <!-- DIV for single four upper buttons -->
        <span @click="clickedOnMenu($event)">OVERALL</span>
        <span @click="clickedOnMenu($event)">EMPLOYEES</span>
        <span @click="clickedOnMenu($event)">EXPENSES</span>
        <span @click="clickedOnMenu($event)">INCOME</span>
      </div>

      <EXPENSES v-if="isEXPENSESClicked" />
      <OVERALL v-if="isOVERALLClicked" />
      <INCOME v-if="isINCOMEClicked" />
      <EMPLOYEES v-if="isEMPLOYEESClicked" />
    </div>

    <div class="two">
      <div class="three">
        <span
          class="two1"
          style="color: #fff; font-size: 22px; font-weight: bold"
          >WELCOME {{ this.currentUser }}</span
        >

        <img
          src="../assets/logo.png"
          style="width=310px; height=250px; justify-content: center; margin-top: 60px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import EXPENSES from "./expenses";
import OVERALL from "./overall-dash";
import INCOME from "./income.vue";
import EMPLOYEES from "./employees.vue";
// import EMPLOYEES from "./employees";
export default {
  components: {
    EXPENSES,
    OVERALL,
    INCOME,
    EMPLOYEES,
  },
  data() {
    return {
      isOVERALLClicked: true,
      isEMPLOYEESClicked: false,
      isEXPENSESClicked: false,
      isINCOMEClicked: false,
      currentUser: null,
    };
  },
  async mounted() {
    this.currentUser = this.$route.params.userId;
    await axios.post("http://127.0.0.1:3000/user/current", {
      username: this.$route.params.userId,
    });
  },
  methods: {
    clickedOnMenu(event) {
      if (event.target.innerText == "OVERALL") {
        this.isOVERALLClicked = !this.isOVERALLClicked;
        this.isEMPLOYEESClicked = false;
        this.isEXPENSESClicked = false;
        this.isINCOMEClicked = false;
      } else if (event.target.innerText == "EMPLOYEES") {
        this.isEMPLOYEESClicked = !this.isEMPLOYEESClicked;
        this.isOVERALLClicked = false;
        this.isEXPENSESClicked = false;
        this.isINCOMEClicked = false;
      } else if (event.target.innerText == "EXPENSES") {
        this.isEXPENSESClicked = !this.isEXPENSESClicked;
        this.isINCOMEClicked = false;
        this.isEMPLOYEESClicked = false;
        this.isOVERALLClicked = false;
      } else if (event.target.innerText == "INCOME") {
        this.isINCOMEClicked = !this.isINCOMEClicked;
        this.isEMPLOYEESClicked = false;
        this.isOVERALLClicked = false;
        this.isEXPENSESClicked = false;
      }
    },
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

.container-com {
  display: grid;
  grid-template-rows: repeat(4, minmax(150px, auto));
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 60px;
}

.one {
  grid-column: 2/6;
  grid-row: 1/8;
  /* background:#00cec9; */
}
.one-btn {
  display: flex;
  justify-content: center;
  background-color: #44bd32;
  align-items: center;
  padding: 40px 20px;
  text-transform: uppercase;
  font-weight: bold;
}
.one-btn span {
  padding: 20px 70px;
  margin-top: 10px;
  margin-right: 4px;
  border: 1px solid white;
  color: #fff;
}

.one-btn span:hover {
  background-color: #fff;
  color: #44bd32;
  cursor: pointer;
}

.below-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
.below-button-container > div:nth-child(odd) {
  padding: 20px;
  /* background-color: #cd6133; */
  width: 180px;
  margin: 0 40px;
}

.below-button-container > div:nth-child(even) {
  /* background-color: #3742fa; */
  width: 180px;
  margin: 0 40px;
  padding: 20px;
}
.two {
  grid-row: 1/10;

  background-color: #44bd32;
  padding: 10px;
}

.three {
  margin-top: 50px;
  text-align: center;
}
</style>