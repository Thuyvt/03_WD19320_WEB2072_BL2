<script setup>
  import {ref, reactive} from "vue";
  const list_albums = reactive([
    {id: "A01", name: "Từ đây từ nay", quantity: 15, price: 2500000},
    {id: "A02", name: "Sau lưng bố", quantity: 5, price: 1500000},
    {id: "A03", name: "Black Jack", quantity: 10, price: 1000000},
    {id: "A04", name: "Thiên lý ơi", quantity: 11, price: 2000000},
    {id: "A05", name: "Sky note", quantity: 12, price: 5500000},
  ])


  let total = 0;
  // Tính tổng tiền trong giỏ hàng
  function totalCartValue() {
    //C1
    for (let i = 0; i < list_albums.length; i++)  {
        total += list_albums[i].price * list_albums[i].quantity;
    }
    return total;

    // C2:
    // return list_albums.reduce((total, item) => {
    //     return total + item.price * item.quantity;
    // }, 0);
  }

  // phương thức xóa
  function deleteItem(index) {
    list_albums.splice(index, 1);
  }

  // Giảm số lượng sản phẩm
  function descreaseItem(index) {
    if (list_albums[index].quantity > 1) {
        list_albums[index].quantity--;
    }
  }

</script>
<template>
    <div class="container">
        <h3>Giỏ hàng</h3>
        <table class="table table-tripped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(album, index) in list_albums" :key="album.id">
                    <td>{{ album.id }}</td>
                    <td>{{ album.name }}</td>
                    <td>{{ album.price }}</td>
                    <td>
                        <!-- C1 -->
                        <!-- <button class="btn" :disabled="album.quantity==0" @click="album.quantity--"> - </button> -->
                        <!-- C2 -->
                        <button class="btn" @click="descreaseItem(index)"></button>
                        {{ album.quantity }}
                        <button class="btn" @click="album.quantity++"> + </button>
                    </td>
                    <td>{{ album.price * album.quantity }}</td>
                    <td>
                        <button class="btn btn-danger" @click="deleteItem(index)"> Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>Tổng tiền: {{ totalCartValue() }}</h2>
    </div>

</template>
