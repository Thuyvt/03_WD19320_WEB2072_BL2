<script setup>
import Header from "./components/lab3_4/Header.vue";
import Footer from "./components/lab3_4/Footer.vue";
// import Main from "./components/lab3_4/Main.vue";
// import Main from "./components/BaiHoc/Day11_App.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="bg-warning">
      <Header></Header>
    </div>
    <!-- <Main></Main> -->
    <div class="container">
      <!-- sử dụng router-view khai báo vùng nội dung động theo url -->
      <router-view></router-view>
    </div>
    <div class="bg-success">
      <Footer></Footer>
    </div>
  </div>
</template>
