<script setup>
    import Header from "./components/Header_Com.vue";
    import Menu from "./components/Menu_Com.vue";
    import Footer from "./components/Footer_Com.vue";
    import Tao_Moi_Sp from "./components/product/Add_Product.vue";

</script>
<template>
    <div class="container">
        <Header></Header>
        <div class="d-fex row">
            <!-- Menu -->
            <div class="col-3">
                <Menu></Menu>
            </div>
            <!-- Main -->
            <div class="col-9">
                <Tao_Moi_Sp></Tao_Moi_Sp>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>
