<template>
  <div class="meun">
      <div v-if="toggle">
        <button class="compose-button">
          <img class="compose-button-image" alt="avatar" src="@/assets/compose.png">
          <div class="compose-button-text">Compose</div>
        </button>
      </div>
      <div v-if="!toggle">
        <button class="compose-button-toggle">
          <img class="compose-button-image-toggle" alt="avatar" src="@/assets/compose.png">
        </button>
      </div>

      <div v-if="toggle">
        <el-scrollbar max-height="350px">
          <div v-for="item in meunItems" :key="item.id">
            <ListItems :icon="item.icon" :item="item.item" />
          </div>
        </el-scrollbar>
      </div>
      <div v-if="!toggle">
        <el-scrollbar max-height="350px">
          <div v-for="item in meunItems" :key="item.id">
            <ListItems :icon="item.icon" :item="blank" />
          </div>
        </el-scrollbar>
      </div>
      <el-divider></el-divider>
      <div v-if="toggle">
        <div style="margin-left:23px;margin-bottom:10px;">Meet</div>
        <el-scrollbar max-height="350px">
          <div v-for="item in meetingItems" :key="item.id">
            <MeetingList :icon="item.icon" :item="item.item" />
          </div>
        </el-scrollbar>
      </div>
      <div v-if="!toggle">
        <div style="margin-bottom:10px;">
          <mdicon class="item-icon" name="video-outline" width="20" height="20" />
        </div>
        <el-scrollbar max-height="350px">
          <div v-for="item in meetingItems" :key="item.id">
            <MeetingList :icon="item.icon" :item="blank" />
          </div>
        </el-scrollbar>
      </div>
  </div>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
import MeetingList from '@/components/MeetingList.vue'
export default {
    name: 'Menu',
    components:{
      ListItems,
      MeetingList
    },
    props: {
      toggle:Boolean
    },
    data(){
      return{
        count: 13,
        blank:'',
        meunItems:[
          {id:1,icon:'inbox',item: 'Inbox'},
          {id:2,icon:'star',item: 'Starred'},
          {id:3,icon:'clock-time-three',item: 'Snoozed'},
          {id:4,icon:'label-variant',item: 'Imported'},
          {id:5,icon:'send',item: 'Sent'},
          {id:6,icon:'text-box',item: 'Draft'},
          {id:7,icon:'label',item: 'Category'},
          {id:8,icon:'chat',item: 'Chats'},
          {id:9,icon:'calendar-clock',item: 'Scheduled'},
          {id:10,icon:'email',item: 'All Mail'},
          {id:11,icon:'alert-circle',item: 'Spam'},
          {id:12,icon:'cog-outline',item: 'Manage labels'},
          {id:13,icon:'plus',item: 'Create labels'}
        ],
        meetingItems:[
          {id:1,icon:'video',item: 'New Meeting'},
          {id:2,icon:'video-plus-outline',item: 'Joing a meeting'}
        ]
      }
    },
    

}
</script>

<style scoped>
.item-icon {
        margin: 5px;
        padding-left: 15px;
    }
  .meun{
    display: flex;
    flex-direction: column;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        
  }
  .compose-button{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 10px;
    border-radius: 50px;
    padding: 7px 25px 7px 7px;
    border: 1px solid #fff;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0.5px 0.5px 5px 0.5px #aaaaaa;
    

  }
  .compose-button:hover{
    box-shadow: 1px 1px 10px 1px #aaaaaa;
  }

  .compose-button-toggle{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 10px;
    border-radius: 50px;
    padding: 7px 7px 7px 7px;
    border: 1px solid #fff;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0.5px 0.5px 5px 0.5px #aaaaaa;
    

  }
  .compose-button-toggle:hover{
    box-shadow: 1px 1px 10px 1px #aaaaaa;
  }
  .compose-button-image{
    width:35px;
    height: 35px;
    margin-right: 15px;
  }
  .compose-button-image-toggle{
    width:35px;
    height: 35px;
    
  }
  .compose-button-text{
    font-weight: bold;
    color: rgb(85, 85, 85);
  }
</style>