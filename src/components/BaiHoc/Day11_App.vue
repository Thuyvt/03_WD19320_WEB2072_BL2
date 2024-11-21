<script setup>
import { ref, onMounted } from "vue";
// Khai báo file kết nối cơ sở dữ liệu
import instanceAxios from "@/ultis/configAxios";

// Khai báo biến ds khách sạn
const hotels = ref();

// Hàm lấy danh sách hotels
const getListHotels = async () => {
  const response = await instanceAxios.get("hotels");
  console.log(response);
  if (response && response.data) {
    hotels.value = response.data;
  }
};

// Hàm xóa
const onClickDelete = async (hotelId) => {
  // Confirm trước khi xóa
  const response = await instanceAxios.delete(`hotels/${hotelId}`);
  // kiểm tra response trả về đã xóa được hay chưa
  // C1: Call api lấy ds mới
  getListHotels();
  // C2: dùng hàm filter xử lý arr bằng js
  // hotels.value = hotels.value.filter(item => item.id !== hotelId);
};

// hook được gọi khi Dom vừa load xong
onMounted(() => {
  getListHotels();
});
</script>
<template>
  <div class="container">
    <div>
      <h2>Danh sách khách sạn</h2>
      <table class="table table-tripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Đánh giá</th>
            <th>Cấp độ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in hotels" :key="hotel.id">
            <td>{{ hotel.id }}</td>
            <td>{{ hotel.name }}</td>
            <td>{{ hotel.address }}</td>
            <td>{{ hotel.rating }}</td>
            <td>{{ hotel.level }}</td>
            <td>
              <button class="btn btn-info">Xem</button>
              <button class="btn btn-danger" @click="onClickDelete(hotel.id)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div>
      <h2>Tạo mới khách sạn</h2>
    </div>
  </div>
</template>
