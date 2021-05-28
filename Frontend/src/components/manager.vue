<template>

    <div class="inner-block2">
        <div class="vue-tempalte">
        <form class= "formcolor" @submit.prevent>
            

            <div class="form-group">
                <label class="textstyles">Enter Your Username</label>
                <input type="username" class="form-control form-control-lg" v-model="username" />
            </div>

            <div class="form-group">
                <label class="textstyles">Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password" />
            </div>

            <button id ="textstyles" @click="showAlerBtn"  class="btn btn-dark btn-lg btn-block" >SIGN IN AS MANAGER</button>

            <h3 v-if="errd === 400">PLease Enter Correct Username and Password</h3>

            <h3 v-else-if="errd === 200">Please Wait, Logging in ...</h3>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password" style="color: #fff" >Forgot password ?</router-link>
            </p>

            

        </form>
    </div>
    </div>
</template>

<script>


const axios =  require('axios');
    
    export default {
        components: { 
            
        },
        data() {
            return {
                username:null,
                password:null,
                isAlertBtn : false,
                userData: null,
                url: "http://127.0.0.1:3000/user/login",
                errd:null,
                isLoggedIn:false

            }
        },
        methods:{

            async showAlerBtn()
            {  
                 console.log("hero")
                this.userData = await axios.post(this.url,{
                    username:this.username,
                    password:this.password
                }).then(data=>{
                    console.log("Data is==>",data)
                    this.errd = data.data.errcd
                    if(this.errd === 200){ 
                        this.isLoggedIn = true;
                    }
                    
                    if(this.isLoggedIn){
                        setTimeout(()=>this.redirectHome(),2000)
                    }
                },(error)=>{
                    console.log("Errors are==>",error);
                })
                
                //.catch(error){
                //     console.log("Error")
                // }
            }  ,
            redirectHome(){
this.$router.push({name:'manager-dashboard'})
            }     
 }
    }

</script>
<style>

    body{
        background-color: white;
    }
</style>
