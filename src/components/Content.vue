<template>
  <div class="content">
      <div class="top"><TopContent /></div>
      <div class="bottom"><BottomContent /></div>
  </div>
</template>

<script>
import TopContent from './TopContent.vue';
import BottomContent from './BottomContent.vue';
export default {
    name: 'Content',
    components:{
      TopContent,
      BottomContent
    }

}
</script>

<style scoped>
  .content {
    display:flex;
    flex-direction:column;
  }
  .top {
    
    border-bottom:1px solid #eee
  }
  .bottom {
    
  }
</style>