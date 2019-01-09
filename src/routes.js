import HomeItem from './components/HomeItem.vue'
import PortfolioItem from './components/Portfolio/PortfolioItem.vue'
import StockListItem from './components/Stocks/StockListItem.vue'

export const routes = [{
        path: '/',
        component: HomeItem
    },
    {
        path: '/portfolio',
        component: PortfolioItem
    },
    {
        path: '/stocks',
        component: StockListItem
    }
]