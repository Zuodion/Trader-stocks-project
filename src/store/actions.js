import Vue from 'vue'
export const loadDataBaseData = ({commit}) => {
    Vue.prototype.$http.get('data.json').then(response => {
        if (response.data) {
            let stocks = response.data.stocks
            let grivnas = response.data.grivnas
            let stockPortfolio = response.data.stockPortfolio
            let portfolio = {
                stockPortfolio,
                grivnas
            };
            commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
        }
    })
}