<template>
  <div class="home">
    
    <el-row>
      <el-col :span="24">
        <!-- Header Component -->
        <Header @menu-toggle="toggleMenu"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="menuCol">
        <!-- Left Meun Bar -->
        <Menu :toggle="toggler" />
      </el-col>
      <el-col :span="contentCol">
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
      toggler: true,
      menuCol:4,
      contentCol:20
    }
  },
  methods:{
    toggleMenu(){
      this.toggler = !this.toggler
      if(this.toggler){
        this.menuCol = 4
        this.contentCol = 20
      }else{
          this.menuCol = 1
          this.contentCol = 23
      }
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
