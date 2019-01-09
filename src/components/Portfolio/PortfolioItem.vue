<template>
    <div>
        <purchased-stocks v-for="(stock, stockIndex) in stocks" :key="stockIndex" :stock="stock"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PurchasedStocks from "./PurchasedStocks";
export default {
    computed: {
        ...mapGetters({ stocks: "stockPortfolio" })
    },
    components: {
        PurchasedStocks
    }
};
</script>