import './Products.css';
import products from '../../products.json'

import ProductItem from '../../components/ProductItem/ProductItem';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import {Product} from '../../interfaces.ts'

function Products(){
console.log(products)

const productComponent = products.map((products: Product)=>{
    return(
        <ProductItem key={ products.price } products = { products }/>
    )
})
    return(
        <main>
            <Header/>

        <section className='products'>
            <h2 className='products__title'>Produkter</h2>
            {productComponent}
            </section>
            <Footer/>
        </main>
    )
}
export default Products;
