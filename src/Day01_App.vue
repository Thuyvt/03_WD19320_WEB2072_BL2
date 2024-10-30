<!-- Khai báo biến, khai báo hàm -->
<script setup>
    // Khai báo thư viện
    import { ref } from 'vue';

    // Khai báo dạng chuỗi
    const tenMonAn = "Trà sữa matcha full topping";
    const danhMuc = ref("Trà sữa");
    // Khai báo số
    const soLuong = 2;
    // Khai báo boolean
    const trangThai = true;
</script>

<!-- Code HTML -->
<template>
  <div id="app">
      <h3>Thông tin món ăn</h3>
      <ul>
        <li>Tên món: {{ tenMonAn }}</li>
        <li>Danh mục: {{ danhMuc }}</li>
        <li>Số lượng: {{ soLuong }}</li>
        <li>Trạng thái: {{ trangThai }}</li>
      </ul>
  </div>
</template>
