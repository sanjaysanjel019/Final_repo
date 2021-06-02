<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col" id="column1" style="margin-left: -170px">
          <h2>WELCOME {{ currentUser }}</h2>
          <br />
          <button class="button" style="margin-top: 40px; margin-right: 70px">
            PICK-UP TIME
          </button>
          <input type="datetime-local" name="" id="dateTimeLocal1" /><br />
          <button class="button" style="margin-top: 10px; margin-right: 70px">
            DROP-OFF TIME
          </button>
          <input type="datetime-local" name="" id="dateTimeLocal1" />

          <!-- <div style="display: flex; margin-left: 250px;">
        <input type="datetime-local" name="" id="dateTimeLocal1"/> <br/> -->
          <!-- </div> -->

          <h4>HAS YOUR VEHICLE BEEN SERVICED IN LAST 90 DAYS ?</h4>
          <div class="chk" style="margin-top: 30px">
            <label class="container1"
              >YES
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>

            <label class="container1"
              >NO
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div style="margin-top: 130px; text-align: center">
            <h5 style="color: #fff">PLEASE UPLOAD YOUR RECEIPT</h5>
            <div>
              <input
                type="file"
                style="
                  background-color: #fff;
                  padding-top: 3px;
                  padding-left: 3px;
                  padding-down: 4px;
                  justify-content: center;
                "
                id="myfile"
                name="myfile"
              />
            </div>
          </div>
        </div>
        <div
          class="col"
          id="column2"
          style="margin-right: -160px; background-color: #fff; margin-left: 0px"
        >
          <div
            style="background-color: rgb(3, 3, 73); color: #fff; padding: 25px"
          >
            <h6 style="margin-top: 10px; margin-left: 170px">
              {{ currentUser }}
            </h6>
            <p style="margin-top: 40px; margin-left: 170px">
              Hi, I'm {{ currentUser }}. I have 3 years of experience in
              Driving.
            </p>
          </div>
          <div>
            <h3
              style="
                margin-top: 25px;
                border: 3px solid rgb(3, 3, 73);
                padding-top: 8px;
                color: rgb(3, 3, 73);
                font-weight: bold;
              "
            >
              REVENUE COLLECTED
            </h3>
            <div
              style="
                display: flex;
                background-color: rgb(3, 3, 73);
                color: #fff;
              "
            >
              <h3 style="margin-left: 75px; margin-top: 90px">THIS RIDE</h3>
              <div>
                <input
                  type="text"
                  name="currency-field"
                  id="currency-field"
                  style="
                    height: 40px;
                    margin-right: 5px;
                    width: 50px;
                    margin-top: 170px;
                    margin-left: -120px;
                    margin-bottom: 25px;
                  "
                  v-model.lazy="thisRideIncome"
                  placeholder="$10"
                />
                <button type="submit" @click="updateRideIncome">Submit</button>
              </div>
              <div>
                <h3 style="margin-left: 350px; margin-top: 90px">TODAY</h3>
                <h4
                  type="button"
                  style="
                    margin-left: 365px;
                    margin-top: 55px;
                    background-color: white;
                    color: rgb(3, 3, 73);
                    border: none;
                    padding: 12px 18px;
                    margin-top: 25px;
                    font-weight: bold;
                  "
                >
                  $ {{ rideIncome }}
                </h4>
              </div>
            </div>
            <div>
              <h6
                style="
                  margin-left: 230px;
                  color: white;
                  background-color: rgb(3, 3, 73);
                  display: inline-block;
                  margin-top: 75px;
                "
              >
                Write a review for the last Customer:
              </h6>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                style="margin-left: 180px; resize: none"
              >
          The customer was good to deal with. 
      </textarea
              >
              <div style="margin-left: 330px">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisRideIncome: "",
      rideIncome: "",
      currentUser: null,
    };
  },
  mounted() {
    this.currentUser = this.$route.params.userId;
  },
  methods: {
    updateRideIncome() {
      this.rideIncome = this.thisRideIncome;
      console.log(this.rideIncome);
    },
  },
};
</script>

<style>
#column1 {
  background-color: rgb(3, 3, 73);
  height: 100vh;
  margin-top: 100px;
}

#column2 {
  background-color: green;
  margin-top: 100px;
}

h2 {
  color: white;
  text-align: center;
  margin-top: 35px;
  padding: 0;
  border: 3px solid white;
  padding-bottom: 4px;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-weight: bold;
  width: 200px;
  border: 3px solid white;
}

.chk {
  display: flex;
}
.container1 {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  margin-left: 170px;
}

/* Hide the browser's default checkbox */
.container1 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  color: rgb(3, 3, 73);
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  justify-content: center;
}

/* On mouse-over, add a grey background color */
.container1:hover input ~ .checkmark {
  background-color: white;
}

/* When the checkbox is checked, add a blue background */
.container1 input:checked ~ .checkmark {
  background-color: #4caf50;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container1 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container1 .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

h4 {
  margin-top: 50px;
  text-align: center;
  color: white;
  border: 3px solid white;
  padding: 5px;
  margin-top: 120px;
}
</style>