import './ProductItem.css'
import { Product } from '../../interfaces';

interface ProductItemProps{
    products: Product;
}

function ProductItem({products}: ProductItemProps){


    return(
        <section className='product-item'>
            <h1 className='product-item__text'>{products.name}</h1>
            <img src={products.img} alt="" />
        </section>
    )
}
export default ProductItem;