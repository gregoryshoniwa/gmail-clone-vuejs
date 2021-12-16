<template>
  <div class="home">
      <div class="container">
          <div class="inner-container">
                <img class="logo" alt="Google logo" src="@/assets/logo.png">
                <div class="signin-text">Sign In</div>
                <div class="signin-text-continue">to continue to Gmail</div>
                <el-input class="email" v-model="loginData.email" placeholder="Email or Phone Number" clearable />
                <el-input class="password" v-model="loginData.password" placeholder="Password" show-password />
                <div @click="forgot" class="forgot-email">Forgot email?</div>
                <div class="not-your-computer">Not your computer? Use guest mode to signin privately.</div>
                <div class="learn-more">Learn more</div>
                <div class="button-container">
                    <el-button @click="createAccount" class="create-account-button" type="text">Create Account</el-button>
                    <el-button @click="login" class="login-button" type="primary">Login</el-button>
                </div>
                
            </div>
       </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  data(){
      return{
          loginData:{
               email: '',
               password: '',
          }
         
      }
  },
  methods:{
      createAccount(){
          this.$router.push('/signup');
      },
      login(){
           this.$router.push('/home');
      },
      forgot(){
           this.$router.push('/forgot');
      }
  }
}
</script>
<style scoped>
    .logo{
        width:80px;
        height:auto
    }
    .home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 100px;
        display:flex;
        justify-content: center;
        
    }
    .container{
        border: 1px solid rgb(207, 207, 207);
        border-radius: 5px;
        width: 30%;
        margin: 10px;
    }
    .inner-container{
        margin: 30px;
    }

    .signin-text{
         margin-top: 15px;
         font-size: 25px;
    }
    .signin-text-continue{
        margin-top: 10px;
    }
    .email{
         margin-top: 30px;
    }
    .password{
         margin-top: 30px;
    }
    .forgot-email{
       color: rgb(105, 108, 255);
       display: flex;
       margin-top: 10px;
       cursor: pointer;
    }
    .not-your-computer{
         margin-top: 30px;
         display: flex;
         
    }
    .learn-more{
        color: rgb(105, 108, 255);
        margin-top: 5px;
        margin-bottom: 30px;
        display: flex;
        cursor: pointer;
    }
    .create-account-button{
        margin-top: 20px;
    }
    .login-button{
       margin-top: 20px;
    }
    .button-container{
        display: flex;
        justify-content: space-between;
    }

    
</style>