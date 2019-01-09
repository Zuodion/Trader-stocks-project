<template>
    <div class="col-sm-6 col-md-3">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                    >
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="validateQuantity"
                    >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stock: Object
    },
    data() {
        return {
            quantity: 0
        };
    },
    computed: {
        validateQuantity() {
            return (
                this.quantity * this.stock.price > this.$store.getters.grivnas ||
                this.quantity < 1 ||
                !Number.isInteger(+this.quantity)
            );
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: Math.floor(+this.quantity)
            };
            this.$store.dispatch("buyStock", order);
            this.quantity = 0;
        }
    }
};
</script>