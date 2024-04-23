<template>
  <q-toolbar show-if-above class="navbar bg-navbar">
      <router-link to="/" class="navbar-brand">
          <img
              style="width: 100px"
              src="../assets/bang-thu-vien-xanh1.png"
              alt="logo"
          /></router-link>
          <q-tabs align="left">
                <!-- <q-route-tab to="/inventory/books" label="Inventory" /> -->
                <!-- <q-route-tab to="/customers" label="Đọc Giả" /> -->
                <q-route-tab to="/Orderlist" label="Danh sách mượn" />
            </q-tabs>

            <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1"
            placeholder="Search for books" @keypress.enter="searchBooks">
            <template v-slot:prepend>
              <q-icon v-if="search === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="clearSearch" />
            </template>
          </q-input>
      <q-space></q-space>
      <q-btn color="primary" label="Tài khoản">
          <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
          >
          <q-list style="min-width: 100px">
              <q-item clickable>
              <q-item-section>
                <router-link to="/info" class="dropdown-item no-underline">
                  Thông tin tài khoản
                  </router-link>
              </q-item-section>
              </q-item>
              <q-item clickable>
              <q-item-section>              
                  <router-link to="/login" class="dropdown-item no-underline">
                  Đăng nhập
                  </router-link>
              </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>              
                    <router-link to="/login" class="dropdown-item no-underline" @click="logout">
                    Đăng xuất
                    </router-link>
                </q-item-section>
                </q-item>
          </q-list>
          </q-menu>
      </q-btn>
  </q-toolbar>
</template>

<script>
if (typeof window.global === "undefined") {
  window.global = window;
}


import { onBeforeMount, ref } from "vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const Product = ref();
    const name = ref();
    const store = useStore();
    const router = useRouter();
    const search = ref('')

    onBeforeMount(async () => {
      try {
        Product.value = await productService.getAll();
      } catch (error) {
        console.log(error);
      }
    });

    function clearSearch() {
      search.value = ''
    }

    function searchBooks() {
      if (search.value.trim() !== '') {
        // Navigate to search results page with search query
        router.push('/search?q=' + search.value.trim())
      }
    }
    const logout = () => {
      // Dispatch the 'logout' action to log the user out
      store.dispatch("logout");
      router.push({ name: "login" }); // Redirect to the 'Login' page on successful login
    };

    return { search, name, logout, clearSearch, searchBooks};
  },
};
</script>

<style scoped>
.no-underline {
  text-decoration: none; /* Loại bỏ gạch chân dưới chữ */
}

.bg-navbar {
    background-color: #1976D2; /* Đặt màu nền cho thanh navbar là #1976D2 */
}
</style>
