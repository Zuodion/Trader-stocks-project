import stocks from '../../data/stocks'
const state = {
    stocks: []
}

const getters = {
    stocks: state => state.stocks
}

const actions = {
    initStocks({commit}) {
        commit('SET_STOCKS', stocks)
    },
    buyStock({commit}, order) {
        commit('BUY_STOCK', order)
    },
    randomizeStocks({commit
    }) {
        commit('RANDOMIZE_STOCKS')
    }
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        })
    },

}

export default {
    state,
    getters,
    actions,
    mutations,
}