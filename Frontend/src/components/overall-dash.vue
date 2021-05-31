<template>
<div>
  <table class="table table-bordered table-hover" style="margin-top:90px;">
  <caption>Request for PDF to see more </caption>
  <thead style="background-color: #fff; color: #44bd32;text-align: center;border:2px solid #44bd32;">
    <tr style="text-transform: uppercase;">
      <th scope="col">Driver's ID</th>
      <th scope="col">Driver's Name</th>
      <th scope="col">Vehicle Number</th>
    </tr>
  </thead>
  <tbody style="text-align:center;background-color:#44bd32; color: #fff;border:2px solid #44bd32;">
    <tr v-for="data in drivers" :key="data.id">
      <th scope="row">{{data.id}}</th>
      <td>{{data.name}}</td>
      <td>{{data.vehicleNumber}}</td>
    
    </tr>
  </tbody>
</table>

</div>
</template>

<script>
const axios = require('axios')
export default {
  data(){
    return{
      drivers:[]
    }
  },
async created(){
  const driverData = await axios.get('http://127.0.0.1:3000/user/driver');
  this.drivers = driverData.data.data.drivers;
  
}
}
</script>

<style>


</style>