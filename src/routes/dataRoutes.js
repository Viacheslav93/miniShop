import {HomePage} from '../pages/home/HomePage'
import {ProductsPage} from '../pages/products/ProductsPage'
import {CartPage} from '../pages/cart/CartPage'
import {FavoritePage} from '../pages/favorite/FavoritePage'
import { SingleProductPage } from '../pages/singleProduct/SingleProductPage'


export const publicRoutes =[
    {pathname: '/', component: <HomePage />},
    {pathname: '/products/:id', component: <SingleProductPage />},
    {pathname: '/products', component: <ProductsPage />},
    {pathname: '/cart', component: <CartPage />},
    {pathname: '/favorite', component: <FavoritePage />},
]
