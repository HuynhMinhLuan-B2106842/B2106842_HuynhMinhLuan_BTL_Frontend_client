<!-- <script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-container>
      <SideBar />
    </q-container>
    <q-page-container>
      <NavBar class="navbar" />
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<style>

</style> -->

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <NavBar class="navbar" />
      <RouterView />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import NavBar from "./components/NavBar.vue";

import { RouterView } from 'vue-router'
export default {
  name: "App",
  components: {
    NavBar,

  },
};
</script>
