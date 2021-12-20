<template>
  <div >
         
            <el-row class="email">
                <el-col :span="3">
                    <div class="email-buttons">
       
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
                                    <mdicon class="item-icon" name="star-outline" width="20" height="20" />
                                </button>
                        </el-tooltip>
                        <el-tooltip
                                class="item"
                                effect="dark"
                                content="More"
                                placement="bottom"
                            >
                                <button class="button">
                                    <mdicon class="item-icon-label" name="label" width="20" height="20" />
                                </button>
                        </el-tooltip>
                </div>
                </el-col>
                <el-col :span="3"><div class="sender-name">{{senderName}}</div></el-col>
                <el-col :span="13"><div class="messageSummary">{{messageSummary}}</div></el-col>
                <el-col :span="5"><div class="date">{{date}}</div></el-col>
            </el-row>
      

  </div>
</template>

<script>
export default {
    props:{
        senderName:String,
        messageSummary:String,
        date:String,
        attachment:String,
    },
    data(){
    return {

    }
}

}
</script>

<style scoped>
    .date{
     text-align:right;
     padding-right: 20px;
     color: rgb(78, 78, 78);
    }
    .messageSummary{
        
      
        
    }
    .sender-name{
        
    }
    .email{
        display: flex;
        justify-content: space-between;
        background-color:rgb(247, 247, 247);
        border-bottom:1px solid #eee;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
    }
    .email:hover{
        /* border-top:1px solid rgba(131, 131, 131, 0.699);
        border-left:1px solid rgba(131, 131, 131, 0.671);
        border-bottom:2px solid rgba(92, 92, 92, 0.514); */
        box-shadow: inset 0 0 3px 0 grey;
    }
    .email-buttons{
        margin-left: 5px;
        margin-right: 15px;
    }
    .button{
      border-radius: 50%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 10px;
      padding-left: 10px;
      margin-top: 2px;
      margin-bottom: 2px;
      text-align:center;
      border :#eee;
      background-color:rgb(247, 247, 247);
      cursor: pointer;
      
  }
  .button-check-box{
      border-radius: 50%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 12px;
      padding-left: 12px;
      text-align:center;
      border :#eee;
      background-color:rgb(247, 247, 247);
      cursor: pointer;
      
  }
  
  .button:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
    color:rgb(51, 51, 51) !important;
}

 .button-check-box:hover {
    cursor: pointer;
	background-color: rgba(233, 233, 233, 0.8);
    color:rgb(51, 51, 51) !important;
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
    .item-icon-label {
        color: rgb(230, 184, 32);
    }
</style>