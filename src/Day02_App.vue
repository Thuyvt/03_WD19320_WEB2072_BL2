<!-- C1: OPTION API -->
<!-- <script>
	export default {
		// khai báo các biến
		data() {
        return {
            count: 0,
            name: '1231'
        }
    },
		// Khai báo các phương thức
		methods: {
        increatement() {
            this.count++;
        }
        // giảm 1 đơn vị
    }
	}
</script> -->
<!-- C2: COMPOSITION API -->
<script setup>
    // Nhúng thư viện
    import { ref, reactive } from "vue";

    // 1. Khai báo kiểu dữ liệu nguyên thủy
    const count = ref(0);
    const name = ref('Vũ Thị Thúy');
    const age = ref(18);
    const status = ref(true);

    // 2. Khai báo kiểu dữ liệu đối tượng
    const student = reactive({
        name: 'Nguyễn Anh Duy',
        age: 18,
        status: false
    });
    // Mảng đối tượng
    const classInfo = reactive({
        id: 'WD19320',
        numStudents: 40,
        listStudents: [
            { name: 'Nguyễn Anh A',age: 18,status: false },
            { name: 'Vũ Thị B', age: 18, status: true },
            { name: 'Nguyễn Văn C', age: 18, status: true   }
        ]
    });

    const increatement = () => {
        count.value++;
    }

    function decrease() {
        count.value--;
    }

</script>
<template>
    Count: {{ count }}
    <button @click="increatement" class="btn btn-success">Add more</button>
    <button @click="decrease" class="btn btn-danger">Decrease</button>
    <br>
    <h3>Thông tin sinh viên 1</h3>
    <ul>
        <li>Họ và tên: {{ name }}</li>
        <li>Tuổi: {{ age }}</li>
        <li>Trạng thái: {{ status ? 'Đang học' : 'Đã nghỉ' }}</li>
    </ul><br>
    <hr>
    <h3>Thông tin sinh viên 2</h3>
    <ul class="list-group">
        <li class="list-group-item">Họ và tên: {{ student.name }}</li>
        <li class="list-group-item">Tuổi: {{ student.age }}</li>
        <li class="list-group-item">Trạng thái: {{ student.status ? 'Đang học' : 'Đã nghỉ' }}</li>
    </ul><br>
    <hr>
    <h3>Thông tin lớp học</h3>
    <ul>
        <li>Mã lớp: {{ classInfo.id }}</li>
        <li>Số lượng sinh viên: {{ classInfo.numStudents }}</li>
        <li v-for="student in classInfo.listStudents" :key="student">
            {{ student.name }} - {{ student.age }} tuổi - Trạng thái: {{ student.status ? 'Đang học' :'Đã nghỉ'}}
        </li>
    </ul>
</template>
