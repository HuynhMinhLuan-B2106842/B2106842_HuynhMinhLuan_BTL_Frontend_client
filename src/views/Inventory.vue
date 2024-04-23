<template>
  <v-container>
    
    <div class="row ">
      <div class="col-3 " style="height: 100%; max-width: 150px;">
        <q-list class="text-black rounded-borders q-ml-md q-mt-lg">
          <q-item>
            <q-item-section class="text-h5"></q-item-section>
          </q-item>
        </q-list>
        
      </div>
     
      <div class="col-9"> 
        <RouterView />
      </div>
      
        
    </div>
  </v-container>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'Iventory',
  components: {
    RouterView // Đảm bảo rằng bạn đã đăng ký RouterView component ở đây
  }
}
</script>

<style scoped>
.blue_background {
  background-color: #40A3F3;
}

.my-card:hover {
  background-color: #40A3F3;
  color: white;
}
</style>
