<template>
  <div class="home">
    
    <el-row>
      <el-col :span="24">
        <!-- Header Component -->
        <Header @menu-toggle="toggleMenu"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <!-- Left Meun Bar -->
        <Menu :toggle="toggler" />
      </el-col>
      <el-col :span="20">
        <!-- Content Area -->
        <Content />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'Home',
  components:{
    
    Header,
    Menu,
    Content 
  },
  data(){
    return {
      toggler: true
    }
  },
  methods:{
    toggleMenu(){
      this.toggler = !this.toggler
    }
  }
 
}
</script>
<style scoped>
.home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        
    }


</style>
