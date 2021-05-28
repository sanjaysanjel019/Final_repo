<template>
   <div class="inner-block4">
    <div class="vue-tempalte">
        <form class="vue-form1">
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" style="background-color: #fff; color: black; font-weight: bold;">Reset password</button>

        </form>
    </div>
   </div>
</template>

<script>
    export default {
        name:"ForgotPassword",
        data() {
            return {}
        }
    }
</script>