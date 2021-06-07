<template>
  <div>
    <div class="container">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-xs-5"></div>
              <div class="col-xs-7">
                <a href="#" class="btn btn-primary"
                  ><i class="material-icons">&#xE147;</i>
                  <span @click="showAddNewUser">Add New User</span></a
                >
                <!-- <a href="#" class="btn btn-primary"
                  ><i class="material-icons">&#xE147;</i>
                  <span>Delete a User</span></a
                > -->
                <a href="#" class="btn btn-primary"
                  ><i class="material-icons">&#xE147;</i>
                  <span @click="showUpdateUser">Update a User</span></a
                >
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Role</th>
                <!-- <th>Status</th> -->
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in wholeEmployees" :key="data.id">
                <td>{{ data.id }}</td>
                <td>
                  <a href="#"> {{ data.name }}</a>
                </td>
                <td>04/10/2013</td>
                <td>{{ data.role }}</td>
                <!-- <td><span class="status text-success">&bull;</span> Active</td> -->
                <td>
                  <a
                    href="#"
                    class="settings"
                    title="Settings"
                    data-toggle="tooltip"
                    ><i class="material-icons">&#xE8B8;</i></a
                  >
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    ><i class="material-icons" @click="deleteDriverData($event)"
                      >&#xE5C9;</i
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="clearfix">
            <div class="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul class="pagination">
              <li class="page-item disabled"><a href="#">Previous</a></li>
              <li class="page-item"><a href="#" class="page-link">1</a></li>
              <li class="page-item"><a href="#" class="page-link">2</a></li>
              <li class="page-item active">
                <a href="#" class="page-link">3</a>
              </li>
              <li class="page-item"><a href="#" class="page-link">4</a></li>
              <li class="page-item"><a href="#" class="page-link">5</a></li>
              <li class="page-item"><a href="#" class="page-link">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Add new user starts -->
    <div v-if="isAddNewData" style="padding: 20px; border: 2px solid #000000">
      <label for="user">Id: </label><br />
      <input type="text" v-model="driverId" />
      <br />
      <label for="user">Name: </label><br />
      <input type="text" v-model="driverName" />
      <br />
      <label for="user">Vehicle Number: </label><br />
      <input type="text" v-model="vehicleNumber" /><br />

      <br />
      <label for="user">Username: </label><br />
      <input type="text" v-model="username" /><br />

      <br />
      <label for="user">Password: </label><br />
      <input type="password" v-model="password" /><br />

      <br />

      <label for="user">Role: </label><br />
      <select id="user-role" v-model="userRole">
        <option v-for="x in roles" :key="x.id">{{ x }}</option>
      </select>

      <button class="user-add" @click="addNewDriver">Add New User</button>
    </div>
    <!-- Add new user ends-->

    <!-- Update users starts -->
    <div v-if="isUpdateData" style="padding: 20px; border: 2px solid #000000">
      <br />
      <label for="user">Enter username of user you want to update: </label
      ><br />
      <input type="text" v-model="username" /><br />

      <br />
      <label for="user">Enter user ID </label><br />
      <input type="text" v-model="uid" /><br />

      <label for="user">Vehicle Number: </label><br />
      <input type="text" v-model="vehicleNumber" /><br />

      <br />
      <label for="user">Name: </label><br />
      <input type="text" v-model="driverName" />
      <br />

      <br />

      <label for="user">Role: </label><br />
      <select id="user-role" v-model="userRole">
        <option v-for="x in roles" :key="x.id">{{ x }}</option>
      </select>

      <button class="user-add" @click="updateUserDetails">
        Update User Data
      </button>
    </div>
    <!-- Update users starts -->
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      wholeEmployees: [],
      isAddNewData: false,
      isUpdateData: false,
      driverId: "",
      driverName: "",
      username: "",
      password: "",
      vehicleNumber: "",
      roles: [],
      userRole: "",
      uid: null,
      toUpdateUser: "",
    };
  },
  methods: {
    showAddNewUser() {
      this.isAddNewData = !this.isAddNewData;
    },
    showUpdateUser() {
      this.isUpdateData = !this.isUpdateData;
    },
    async updateUserDetails() {
      await axios
        .post("http://127.0.0.1:3000/user/current", {
          username: this.username,
        })
        .then((resp) => {
          this.toUpdateUser = JSON.parse(JSON.stringify(resp.data.data));
        });
      this.uid = this.toUpdateUser.user.id;

      if (this.vehicleNumber == "") {
        this.vehicleNumber = this.toUpdateUser.user.vehicleNumber;
      }
      if (this.driverName == "") {
        this.driverName = this.toUpdateUser.user.name;
      }

      if (this.role == "") {
        this.userRole = this.toUpdateUser.user.role;
      }

      axios
        .put(`http://127.0.0.1:3000/user/${this.uid}`, {
          id: this.uid,
          name: this.name,
          vehicleNumber: this.vehicleNumber,
          role: this.userRole,
          name: this.driverName,
        })
        .then((res) => {
          alert("User Updated");
        });
    },
    addNewDriver() {
      axios
        .post("http://127.0.0.1:3000/user", {
          id: this.driverId,
          name: this.driverName,
          vehicleNumber: this.vehicleNumber,
          username: this.username,
          password: this.password,
          role: this.userRole,
        })
        .then((res) => {
          alert("Data added");
        });
    },
    // async deleteDriverData($event) {
    //   console.log(
    //     $event.explicitOriginalTarget.parentNode.parentNode.parentNode
    //       .childNodes[0].innerText
    //   );
    //   const toDelelteId =
    //     $event.explicitOriginalTarget.parentNode.parentNode.parentNode
    //       .childNodes[0].innerText;
    //   await axios
    //     .delete(`http://127.0.0.1:3000/user/driver/${toDelelteId}`, {
    //       id: toDelelteId,
    //     })
    //     .then(
    //       (res) => {
    //         console.log(res);
    //       },
    //       (error) => {
    //         console.log("Error is==>", error);
    //       }
    //     );
    // },
  },
  async mounted() {
    const wholeData = await axios.get("http://127.0.0.1:3000/user/");
    this.wholeEmployees = wholeData.data.data.users;
    const nextData = [];
    let i = 0;
    this.wholeEmployees.forEach((index, i) => {
      nextData[i] = index.role;
      i++;
    });

    function gtDuplicateValues(data) {
      return data.filter((value, index) => data.indexOf(value) !== index);
    }
    this.roles = gtDuplicateValues(nextData);
  },
};
</script> 


<style scoped>
@import "https://fonts.googleapis.com/css?family=Roboto|Varela+Round";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

body {
  color: #566787;
  background: #f5f5f5;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #44bd32;
  color: #fff;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn {
  color: #566787;
  float: right;
  font-size: 13px;
  background: #fff;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn:hover,
.table-title .btn:focus {
  color: #44bd32;
  background: #f2f2f2;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
}
table.table td a:hover {
  color: #44bd32;
}
table.table td a.settings {
  color: #44bd32;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.status {
  font-size: 30px;
  margin: 2px 2px 0 0;
  display: inline-block;
  vertical-align: middle;
  line-height: 10px;
}
.text-success {
  color: #10c469;
}
.text-info {
  color: #62c9e8;
}
.text-warning {
  color: #ffc107;
}
.text-danger {
  color: #ff5b5b;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #44bd32;
}
.pagination li.active a:hover {
  background: #44bd32;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
input[type="text"],
input[type="password"] {
  padding: 10px;
  margin: 10px 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}

.user-add {
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  border: none;
  background-color: #44bd32;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  opacity: 1;
}
.user-add:hover {
  opacity: 0.8;
}
</style>