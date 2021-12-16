<template>
  <div class="list-items">
      <mdicon class="item-icon" :name="icon" width="20" height="20" />
      <div class="item-text">{{item}}</div>
  </div>
</template>

<script>
export default {
    props:{
        icon:String,
        item:String
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .item-icon {
        margin: 5px;
        padding-left: 15px;
    }
    .item-text {
        margin: 5px;
        padding-left: 10px;
    }
    .list-items{
        display: flex;
        justify-content:left;
        align-items:center;
        color:grey;
        cursor: pointer;

    }
    .list-items:hover{
        background-color: rgb(236, 236, 236);
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        cursor: pointer;
        width: 90%;
    }
</style>