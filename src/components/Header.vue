<template>
  <div class="header">
     
      <el-row>
        <el-col :span="4">
            <div class="left-side">
                <el-tooltip
                    class="item"
                    effect="dark"
                    content="Main menu"
                    placement="bottom"
                >
                    <button class="menu-button" @click="$emit('menu-toggle')">
                     <div class="icon">
                         <MenuIcon />
                     </div>
                 </button>
                </el-tooltip>
                 
                 <img class="logo" alt="Google logo" src="@/assets/gmail.png">
            </div>
           
        </el-col>
      <el-col :span="17">
          <div class="middle-side">
                <el-input class="text-input" v-model="search" placeholder="Search mail">
                <template #prepend><div class="icon"><MagnifyIcon  /></div></template>
                <template #append><div class="icon"><TuneIcon /></div></template>
            </el-input>
          </div>
        
      </el-col>
      <el-col :span="3">
            <div class="right-side">
                <el-tooltip
                    class="item"
                    effect="dark"
                    content="Support"
                    placement="bottom"
                >
                    <button class="menu-button-right">
                     <div class="icon">
                         <ProgressQuestionIcon />
                     </div>
                 </button>
                </el-tooltip>

                <el-tooltip
                    class="item"
                    effect="dark"
                    content="Settings"
                    placement="bottom"
                >
                    <button class="menu-button-right">
                     <div class="icon">
                         <CogOutlineIcon />
                     </div>
                 </button>
                </el-tooltip>

                <el-tooltip
                    class="item"
                    effect="dark"
                    content="Google Apps"
                    placement="bottom"
                >
                    <button class="menu-button-right">
                     <div class="icon">
                         <AppsIcon />
                     </div>
                 </button>
                </el-tooltip>
                 
                  
                  
                 <img class="avatar" alt="avatar" src="@/assets/avator.jpg">
                 
            </div>
      </el-col>
    </el-row>
      
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import TuneIcon from 'vue-material-design-icons/Tune.vue';

import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue';
import ProgressQuestionIcon from 'vue-material-design-icons/ProgressQuestion.vue';
import AppsIcon from 'vue-material-design-icons/Apps.vue';

export default {
    name: 'Header',
    components: {
        MenuIcon,
        MagnifyIcon,
        TuneIcon,
        CogOutlineIcon,
        ProgressQuestionIcon,
        AppsIcon
    },
    data(){
        return {
            search:''
        }
    }

}
</script>

<style scoped>
.item {
    margin: 4px;
    font-family: Arial, Helvetica, sans-serif;
  }
.icon{
    margin-top:6px;
}
  .header{
      border-bottom: 1px solid #eee;
  }
  
  
  .menu-button{
      border-radius: 50%;
      text-align:center;
      border :#eee;
      background-color: #fff;
      cursor: pointer;
      width : 50px;
      height : 50px;
      margin-left: 15px;
      
  }
  .menu-button:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
    margin-left: 15px;
	
}
  .menu-button-right{
      border-radius: 50%;
      text-align:center;
      border :#eee;
      background-color: #fff;
      cursor: pointer;
      
      margin-left: 8px;
      margin-right: 7px;
  }
  .menu-button-right:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
	
}
.avatar{
      border-radius: 50%;
      text-align:center;
      border: #fff solid 2px;
      background-color: #fff;
      cursor: pointer;
      
      width: 35px;
      height: 35px;
      
     

}
.avatar:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
    border: rgb(189, 189, 189) solid 2px;
    
}
  .logo{
        width:110px;
        height:25px;
        padding-left: 8px;
        padding-top:17px;
    }

   .left-side{
       display: flex;
       align-content: center;
       justify-content:left;
       
   }
   .right-side{
       display: flex;
       align-content: center;
       justify-content:right;
       padding: 10px 15px 6.5px 6.5px;
   }
  .middle-side{
      display: flex;
       align-content: center;
       justify-content:left;
        width: 70%;
        margin-top: 12px;
       
   }
  
</style>