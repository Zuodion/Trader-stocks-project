const state = {
    grivnas: 40000,
    purchasedStocks: []
}

const getters = {
    stockPortfolio(state, getters) {
        return state.purchasedStocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    grivnas: state => state.grivnas
}

const actions = {
    sellStockOrder({
        commit
    }, order) {
        commit('SELL_STOCKS', order)
    }
}

const mutations = {
    'BUY_STOCK'(state, {
        stockId,
        stockPrice,
        quantity
    }) {
        const record = state.purchasedStocks.find(element => element.id === stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.purchasedStocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.grivnas -= stockPrice * quantity
    },
    'SELL_STOCKS'(state, {
        stockId,
        quantity,
        stockPrice
    }) {
        const record = state.purchasedStocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.purchasedStocks.splice(state.purchasedStocks.indexOf(record), 1);
        }
        state.grivnas += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.grivnas = portfolio.grivnas,
        state.purchasedStocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}