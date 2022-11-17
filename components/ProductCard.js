import styles from '../styles/Home.module.css'


const ProductCard = ({product}) => {

  return (
    <a 
    href={`/products/${product.sys.id}`} 
    className={styles.boomerang}>
      <div>
        <div>🪃</div>
        <p>{product.fields.name}</p>
        <p>{product.fields.price}</p>
        <details>
          <summary>Description</summary>
          {product.fields.description}
        </details>
      </div>
    </a>
  )
}

export default ProductCard