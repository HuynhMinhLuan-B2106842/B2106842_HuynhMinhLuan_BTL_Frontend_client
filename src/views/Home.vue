<template>
    <q-input
      outlined
      v-model="searchProjectName"
      placeholder="Tìm theo tên"
      class="bg-white input-box"
      @keyup.enter="searchBooks"
    />
     
    <div class="booklist">
      <div class="row">
        <div class="bookcard" v-for="book in filteredBooks" :key="book.id">
          <BookCard v-bind="book" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import BookCard from '@/components/BookCard.vue';
  
  export default {
    components: {
      BookCard,
    },
    data() {
      return {
        books: [],
        searchProjectName: '',
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/api/book/');
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      searchBooks() {
        const searchTerm = this.searchProjectName.toLowerCase().trim();
        // Improved filtering logic
        this.filteredBooks = this.books.filter((book) => {
          const bookTitle = book.name?.toLowerCase(); // Handle potential absence of title
          return bookTitle && bookTitle.includes(searchTerm);
        });
      },
    },
    computed: {
      filteredBooks() {
        // Ensure filteredBooks is reactive for UI updates
        return this.searchProjectName ? this.searchBooks() : this.books;
      },
    },
  };
  </script>
  

<style scoped>
.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.bookcard {
  flex: 1 0 200px;
  margin: 25px;
  max-width: 300px;
}
</style>