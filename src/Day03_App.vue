<script setup>
	import { ref , reactive} from "vue";
	// DATA BINDING
	// 1. Interpolation binding - Gắn kết nội suy
	const product = reactive({
		id: "SP01",
		name: "Bánh tráng cuốn thịt heo",
		price: 80000,
		category: "Bánh tráng"
	});
    // 2. PROPERTY BINDING
    const quyenSach = "Xứ sở miên man";
    const imageUrl = "/img/sach01.jpg"; // Đường dẫn trực tiếp tới thư mục public
    // 3. EVENT BINDING
    const onClickThanhToan = () => {
        alert("Thanh toán thành công");
    }
    function onClickBlur() {
        alert("Gọi sự kiện blur");
    }

    // 4. 2WAY DATABINDING
    const userName = ref("Vũ Thị Thúy");


</script>
<template>
	<div class="container-fluid bg-warning">
		<!-- 1. Interpolation binding -->
		<div class="mb-3 text-primary">
			<h3>INTERPOLATION BINDING</h3>
			<p>Id sản phẩm: {{ product.id }}</p>
			<p>Tên sản phẩm: {{ product.name }}</p>
			<p>Giá sản phẩm: {{ product.price }}</p>
			<p>Danh mục sản phẩm: {{ product.category  }}</p>
		</div>
		<!-- 2. property binding -->
		<hr>
		<div class="mb-3">
			<h3>PROPERTY BINDING</h3>
			<h6>Property value</h6>
			<input type="text" class="form-control" v-bind:value="quyenSach">
      <h6>Property src</h6>
      <img :src="imageUrl" alt="" height="100">
		</div>
    <!-- 3. Event binding -->
    <hr>
    <div class="mb-3">
        <h3>EVENT BINDING</h3>
        <h6>Bắt sự kiện click</h6>
        <button class="btn btn-success" @click="onClickThanhToan()">Thanh toán</button>
        <h6>Bắt sự kiện blur</h6>
        <input type="text" class="form-control" @blur="onClickBlur()">
    </div>
    <!-- 4. 2way databinding -->
     <hr>
     <div class="mb-3">
        <h3>2 WAY DATA BINDING</h3>
        <p> v-model: sử dụng để đồng bộ dữ liệu 2 chiều từ code js và html</p>
        <p>Xin chào {{ userName }}</p>
        <input type="text" v-model="userName" class="form-control">
     </div>
	</div>
</template>
