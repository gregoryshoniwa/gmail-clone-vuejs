<template>
  <div class="bottom-content">
      <el-scrollbar max-height="640px">
          <div class="email-tabs">
                <div class="tab" :class="{active : selectedTab == 'Primary'}" @click="selectedTab = 'Primary'">
                    <mdicon class="item-icon" name="inbox" width="20" height="20" />
                    <div class="item-text">Primary</div>
                </div>
                 <div class="tab" :class="{active : selectedTab == 'Social'}" @click="selectedTab = 'Social'">
                    <mdicon class="item-icon" name="account-supervisor" width="20" height="20" />
                    <div class="item-text">Social</div>
                </div>
                 <div class="tab" :class="{active : selectedTab == 'Promotions'}" @click="selectedTab = 'Promotions'">
                    <mdicon class="item-icon" name="ticket" width="20" height="20" />
                    <div class="item-text">Promotions</div>
                </div>
                 <div class="tab" :class="{active : selectedTab == 'Updates'}" @click="selectedTab = 'Updates'">
                    <mdicon class="item-icon" name="alert-circle" width="20" height="20" />
                    <div class="item-text">Updates</div>
                </div>
          </div>
          <div v-for="(item,i) in emailData" :key="i">
            <Email :senderName="item.senderName" :messageSummary="item.messageSummary" :date="item.date" :attachment="item.attachment"/>
          </div>
        </el-scrollbar>
  </div>
</template>

<script>
import Email from './Email.vue';

export default {
    components:{
        Email
    },
    data(){
        return{
            count:200,
            selectedTab:'Primary',
            emailData:[
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
                {senderName:'Blessing Shoniwa',messageSummary:'I am asking you for help to finish my examination payments for this year',date:'5:35 AM',attachment:'Payments'},
                {senderName:'Ruzhow Accounts',messageSummary:'The money that you have been waiting for this month has come through.',date:'Dec 14'},
                {senderName:'Turing.com',messageSummary:'We are sending you this email to confirm that you where successful in the job interview.',date:'Dec 14'},
                {senderName:'Michael Moyana',messageSummary:'Hi i wanted to know if you are still doing custom software development.',date:'Dec 12',attachment:'Proposal'},
                {senderName:'Singing In Key',messageSummary:'Hello Gregory, we saw you sent and application to learn how to sing in key',date:'Dec 12'},
                {senderName:'Steward Bank',messageSummary:'This is you monthly bank statement for the moth of November',date:'Dec 10'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 5216',date:'Dec 9',attachment:'OTP'},
                {senderName:'Ruzhow Accounts',messageSummary:'This is you OTP confirmation to login to you account : 9576',date:'Dec 5',attachment:'OTP'},
                {senderName:'Peter Dube',messageSummary:'Good day Gregory, We are please to tell you that you car loan has been approved',date:'Dec 3'},
                {senderName:'Blessing Shoniwa',messageSummary:'Hay baby, my phone is not working so can you come and pick me up at 5pm.',date:'Dec 1'},
            ]
            
        }
    },
    
}
</script>

<style scoped>
    .bottom-content{

    }
    .active{
         
         border-bottom: 3px solid rgb(223, 31, 31) !important;
         
         
    }
    .email-tabs{
        display: flex;
        border-bottom: 1px solid #eee;
    }
    .tab{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 240px;
        padding: 18px;
        cursor: pointer;
        color:grey;
        border-bottom: 3px solid rgb(255, 255, 255);
    }
    .tab:hover{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 240px;
        padding: 18px;

        background-color: #eee;
        cursor: pointer;
        color:rgb(51, 51, 51);
        border-bottom: 3px solid rgb(226, 226, 226);
    }
    .item-icon{
        padding-right: 15px;
    }
    .item-text{

    }
</style>