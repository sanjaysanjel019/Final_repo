<template>
 <div class="below-button-container" style="background-color:green; color:white;">
<div class="bt-2"> 
          <div style="font-weight: bold; ">VEHICLE NUMBER</div>
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
<div class="bt-2"> 
          <div style="font-weight: bold;">DRIVER</div>
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
<div class="bt-2"> 
          <div style="font-weight: bold; margin-bottom: 25px;">ON WORK?</div>

          <label class="switch">
           <input type="checkbox">
          <span class="slider round"></span>
          </label>
          
          <label class="switch">
           <input type="checkbox">
          <span class="slider round"></span>
          </label>

          <label class="switch">
           <input type="checkbox">
          <span class="slider round"></span>
          </label>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #44bd32;
}

input:focus + .slider {
  box-shadow: 0 0 1px #44bd32;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.bt-2> div{
  margin-bottom: 25px;
  margin-top: 40px;

}


</style>