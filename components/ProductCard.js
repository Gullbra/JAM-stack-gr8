import styles from '../styles/Home.module.css'


const ProductCard = ({product}) => {
  return (
    <a className={styles.boomerang}>
      {product.fields.name}
      {product.fields.description}
      {product.fields.price}
    </a>
  )
}

export default ProductCard