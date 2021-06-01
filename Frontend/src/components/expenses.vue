<template>
  <div>
    <table
      class="table table-bordered"
      style="margin-top: 90px; table-layout: fixed"
    >
      <caption>
        Request for PDF to see more
      </caption>
      <thead
        style="
          background-color: #fff;
          color: #44bd32;
          text-align: center;
          border: 2px solid #44bd32;
        "
      >
        <tr style="text-transform: uppercase">
          <th scope="col"></th>
          <th scope="col">SERVICINGS</th>
          <th scope="col">SALARY</th>
          <th scope="col">TOTAL</th>
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
        <tr>
          <th scope="row">TODAY'S EXPENSES</th>
          <td>{{ todayServicing }}</td>
          <td>{{ todaySalary }}</td>
          <td>{{ todayTotal }}</td>
        </tr>
        <tr>
          <th scope="row">THIS MONTH'S EXPENSES</th>
          <td>{{ monthlyServicing }}</td>
          <td>{{ monthlySalary }}</td>
          <td>{{ monthlyTotal }}</td>
        </tr>
        <tr>
          <th scope="row">THIS YEAR'S EXPENSES</th>
          <td>{{ yearlyServicing }}</td>
          <td>{{ yearlySalary }}</td>
          <td>{{ yearlyTotal }}</td>
        </tr>
      </tbody>
    </table>
    <button class="user-add" @click="showExpenseDiv">
      <i
        class="fa fa-plus-circle"
        aria-hidden="true"
        style="padding: 4px 10px"
      ></i
      >Add today Expenses
    </button>
    <div class="add-expense" v-if="isShowExpenseDiv">
      <br />
      <label for="user">Servicing: </label><br />
      <input type="text" v-model="todayServicing" /><br />
      <label for="user">Salary: </label><br />
      <input type="text" v-model="todaySalary" /><br />
      <button class="user-add" @click="addedExpense">Add Now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowExpenseDiv: false,
      todayServicing: 0,
      todaySalary: 0,
      todayTotal: 0,
      monthlyServicing: 0,
      monthlySalary: 0,
      monthlyTotal: 0,
      yearlyServicing: 0,
      yearlySalary: 0,
      yearlyTotal: 0,
    };
  },
  methods: {
    showExpenseDiv() {
      this.isShowExpenseDiv = !this.isShowExpenseDiv;
    },
    addedExpense() {
      this.todayTotal =
        parseInt(this.todayServicing) + parseInt(this.todaySalary);
      this.monthlyTotal = parseInt(this.todayTotal);
      this.yearlyTotal = parseInt(this.monthlyTotal);
      // this.monthlyTotal =
      //   parseInt(this.monthlyServicing) + parseInt(this.monthlySalary);
      // this.yearlyTotal =
      //   parseInt(this.yearlyServicing) + parseInt(this.yearlySalary);

      // return parseInt(this.todayTotal);
    },
  },
};
</script>

<style>
input[type="text"] {
  padding: 10px;
  margin: 10px 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}
label {
  padding: 10px;
}
.user-add {
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  border: none;
  margin: 5px 10px;
  background-color: #44bd32;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  opacity: 1;
}
.user-add:hover {
  opacity: 0.8;
}
.add-expense {
  box-shadow: 10px 10px 57px -15px rgba(0, 0, 0, 0.77);
  -webkit-box-shadow: 10px 10px 57px -15px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 10px 10px 57px -15px rgba(0, 0, 0, 0.77);
  padding: 10px;
  margin: 10px;
}
</style>