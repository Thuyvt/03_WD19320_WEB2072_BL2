<script setup>
  	import { ref, reactive } from "vue";

	// Mảng
	const list_products = reactive([]);
	// đối tượng
	let product = reactive({
		name: "",
		price: 0,
		quantity: 0,
		description: "",
		category_id: "",
		status: false,
	});
    // biến lưu thông báo lỗi
    const errors = reactive({});

	const submitForm = () => {
		// lấy dữ liệu nhập vào từ form
    // console.log(product)
		// kiểm tra dữ liệu đầu vào
    let isFormValid = true;
    if (!product.name) {
        isFormValid = false;
        errors.name = "Tên bắt buộc nhập";
    } else {
        isFormValid = true;
        errors.name = "";
    }

    if (!product.price || product.price < 0) {
        isFormValid = false;
        errors.price = "Giá bất buộc nhập và phải lớn hơn 0";
    } else {
        isFormValid = true;
        errors.price = "";
    }

    if (!product.quantity || product.quantity < 0) {
        isFormValid = false;
        errors.quantity = "Số lượng bất buộc nhập và phải lớn hơn 0";
    } else {
        isFormValid = true;
        errors.quantity = "";
    }
    if (isFormValid) {
		// thêm dữ liệu từ form vào mảng
        list_products.push({
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            category_id: product.category_id,
            status: product.status == 1 ? true : false,
        });

        console.log(list_products);
        }
	}

    const onClickDelete = (index) => {
        list_products.splice(index, 1);
    }
    const onClickUpdated = (index) => {
        // lấy được đối tượng trong list = index
        product = list_products[index];
    }
 </script>
<template>
    <div>
        <h2>Danh sách sản phẩm</h2>
        <button class="btn btn-success">Tạo mới</button>
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Danh mục</th>
                    <th>Mô tả</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pro, index) in list_products" :key="pro">
                    <td>{{ pro.name }}</td>
                    <td>{{ pro.price }}</td>
                    <td>{{ pro.quantity }}</td>
                    <td>{{ pro.category_id }}</td>
                    <td>{{ pro.description }}</td>
                    <td>{{ pro.status }}</td>
                    <td>
                        <button class="btn btn-warning" @click="onClickUpdated(index)">Cập nhật</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> <hr>
    <!-- Form tạo mới -->
    <div>
        <h2>Tạo mới sản phẩm</h2>
        <form action="" @submit.prevent="submitForm">
            <div class="mb-3">
                <span class="form-label">Tên sản phẩm:</span>
                    <input type="text" class="form-control" placeholder="Nhập tên" v-model.trim="product.name">
            <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
            </div>
                <div class="mb-3">
                    <span class="form-label">Danh mục sản phẩm:</span>
                    <select name="" id="" class="form-control" v-model="product.category_id">
                    <option value=""> -- Lựa chọn --</option>
                    <option value="1">Danh mục 1</option>
                    <option value="2">Danh mục 2</option>
                    </select>
                </div>
            <div class="mb-3">
                    <span class="form-label">Mô tả sản phẩm:</span>
                    <textarea class="form-control" placeholder="Nhập mô tả" v-model.trim="product.description"></textarea>
                </div>
            <div class="mb-3">
                    <span class="form-label">Giá sản phẩm:</span>
                    <input type="number" class="form-control" placeholder="Nhập giá" v-model.number="product.price">
                    <span v-if="errors.price" class="text-danger">{{ errors.price }}</span>
                </div>
            <div class="mb-3">
                    <span class="form-label">Số lượng sản phẩm:</span>
                    <input type="number" class="form-control" placeholder="Nhập số lượng" v-model.number="product.quantity">
                    <span v-if="errors.quantity" class="text-danger">{{ errors.quantity }}</span>
                </div>
            <div class="mb-3">
                    <span class="form-label">Trạng thái:</span>
                    <input type="checkbox" class="form-check-input" v-model="product.status"> Còn hàng
                </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-success">Tạo mới</button>
                <button class="btn btn-success"  @click="onClickUpdated()">Cập nhật</button>
            </div>
        </form>
    </div>

</template>
