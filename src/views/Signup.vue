<template>
  <div class="home">
      <div class="container">
          <div class="inner-container">
                <el-row>
                    <el-col :span="12">
                        <img class="logo" alt="Google logo" src="@/assets/logo.png">
                        <div class="signin-text">Create you Google Account</div>
                        <div class="signin-text-continue">to continue to Gmail</div>
                        <el-row :gutter="20">
                            <el-col :span="12"><el-input class="text-input" v-model="firstName" placeholder="First Name" clearable /></el-col>
                            <el-col :span="12"><el-input class="text-input" v-model="lastName" placeholder="Last Name" clearable /></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-input class="text-input" v-model="username" placeholder="User Name" clearable >
                                    <template #append>gmail.com</template>
                                </el-input>
                                <div class="bottom-input-text">You can use letter, numbers & periods</div>
                            </el-col>

                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12"><el-input class="text-input" v-model="password" placeholder="Password" show-password /></el-col>
                            <el-col :span="12"><el-input class="text-input" v-model="confirm" placeholder="Confirm" show-password /></el-col>
                            <div class="bottom-input-text-two">Use 8 or more characters with a mix of letter, numbers & symbols</div>
                        </el-row>
                        
                        
                        
                        
                        <div class="button-container">
                            <el-button @click="login" class="create-account-button" type="text">Sign in instead</el-button>
                            <el-button @click="signup" class="login-button" type="primary">Signup</el-button>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="side-image">
                            <img class="side-logo" alt="Google logo" src="@/assets/account.svg">
                            <div class="side-logo-text">One Account. All of Google</div>
                            <div class="side-logo-text-two">Working for you.</div>
                        </div>
                    </el-col>
                </el-row>
                
                
            </div>
       </div>
  </div>
</template>

<script>


export default {
  name: 'Signup',
  data(){
      return{
          email: '',
          password: '',
      }
  },
  methods:{
      signup(){
          this.$router.push('/');
      },
      login(){
           this.$router.push('/');
      },
      forgot(){
           this.$router.push('/forgot');
      }
  }
}
</script>
<style scoped>
    .bottom-input-text{
        display: flex;
        font-size:12px;
        margin-top: 5px;
        margin-left: 10px;
        flex-wrap: wrap;
    }
    .bottom-input-text-two{
        display: flex;
        font-size:12px;
        margin-top: 5px;
        margin-left: 22px;
        flex-wrap: wrap;
    }
    .side-image{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .side-logo{
        margin-top: 50px;
        width:250px;
        height: auto;
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
        width: 50%;
        margin: 10px;
    }
    .inner-container{
        margin: 30px;
    }

    .logo{
        display: flex;
        width:80px;
        height:auto
    }
    .signin-text{
        margin-top: 15px;
         display: flex;
         font-size: 25px;
    }
    .signin-text-continue{
        display: flex;
        margin-top: 10px;
    }
    .text-input{
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
        margin-top:30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }




    
</style>