<template>
  <div class="top-content">
      <div>
           <el-tooltip
                    class="item"
                    effect="dark"
                    content="Select"
                    placement="bottom"
                >
                    <button class="button-check-box">
                        <el-checkbox  v-model="checked1" ></el-checkbox>
                   </button>
            </el-tooltip>
            <el-tooltip
                    class="item"
                    effect="dark"
                    content="Refresh"
                    placement="bottom"
                >
                    <button class="button">
                        <mdicon class="item-icon" name="refresh" width="20" height="20" />
                    </button>
            </el-tooltip>
            <el-tooltip
                    class="item"
                    effect="dark"
                    content="More"
                    placement="bottom"
                >
                    <button class="button">
                        <mdicon class="item-icon" name="dots-vertical" width="20" height="20" />
                    </button>
            </el-tooltip>
          
          
      </div>
      <div>
          <el-tooltip
                    class="item"
                    effect="dark"
                    content="Counter"
                    placement="bottom"
                >
                    <button class="button-box">
                        1-50 of 1422
                    </button>
            </el-tooltip>
          <el-tooltip
                    class="item"
                    effect="dark"
                    content="New"
                    placement="bottom"
                >
                    <button class="button">
                        <mdicon class="item-icon" name="chevron-left" width="20" height="20" />
                    </button>
            </el-tooltip>
            <el-tooltip
                    class="item"
                    effect="dark"
                    content="Old"
                    placement="bottom"
                >
                    <button class="button">
                        <mdicon class="item-icon" name="chevron-right" width="20" height="20" />
                    </button>
            </el-tooltip>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            checked1:false,
        }
    }
}
</script>

<style scoped>
.button{
      border-radius: 50%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 10px;
      padding-left: 10px;
      text-align:center;
      border :#eee;
      background-color: #fff;
      cursor: pointer;
      margin: 5px;
  }
  .button-check-box{
      border-radius: 50%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 12px;
      padding-left: 12px;
      text-align:center;
      border :#eee;
      background-color: #fff;
      cursor: pointer;
      margin: 5px;
  }
  
  .button:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
}

 .button-check-box:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
}

.button-box{
      border-radius: 5px;
      text-align:center;
      border :#eee;
      background-color: #fff;
      cursor: pointer;
      padding: 10px;
      margin: 5px;
      color:gray;
  }
  .button-box:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
}
.item {
    
    font-family: Arial, Helvetica, sans-serif;
  }
  .check-box{
      padding-top: 50px;
  }
    .item-icon {
        color: grey;
    }
    .top-content {
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
    }
</style>