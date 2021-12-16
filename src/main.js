import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'

import * as mdijs from '@mdi/js'
import mdiVue from 'mdi-vue/v3'

const app = createApp(App)
installElementPlus(app)
app.use(mdiVue, {
    icons: mdijs
  }) 
app.use(router).mount('#app')