<template>
   <div class="below-button-container">  <!-- Div for multiple buttons-->
        <div class="bt-1"> 
          <div style=" margin-top:185px;font-weight: bold;">EXPENSES TODAY</div>
          <div style="font-weight: bold;">EXPENSES THIS MONTH</div>
          <div style="font-weight: bold;">EXPENSES THIS YEAR</div>
        </div>
        <div class="bt-1"> 
          <div style="font-weight: bold;">SERVICING</div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
          
          <div style= "background: transparent;">
              <input type="text">
          </div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
        </div>
        <div class="bt-1"> 
          <div style="font-weight: bold;">OTHERS</div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
        </div>
        <div class="bt-1"> 
            <div style="font-weight: bold; color: white;">TOTAL</div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
          <div style= "background: transparent;">
            <input type="text">
          </div>
          <div style= "background: transparent;">
              <input type="text">
          </div>
          </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.bt-1{
  display:flex;
  flex-direction: column;
  height:500px;
}
.bt-1 div{
  padding:20px;
  width: 220px;
  margin:40px 0px;
  /* border:2px solid #000000;  */
  background-color: #44bd32;
  color: white;
  text-align: center;
  display: inline-block;
}

input{
  height: 35px;
}

/* .bt-3{
  display:flex;
  flex-direction: column;
  height:500px;
  align-items: center;
}
.bt-3 div{
    padding:20px;
    background-color: #44bd32;
   margin:40px 0px;
    overflow: hidden;
} */

</style>