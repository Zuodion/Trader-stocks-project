<template>
    <div>
        <stock-item v-for="(stock, stockIndex) in stocks" :key="stockIndex" :stock="stock"/>
    </div>
</template>


<script>
import StockItem from "./StockItem.vue";
export default {
    components: {
        StockItem
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
};
</script>