import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useRouter } from 'next/router'


const client = createClient({
  space: 'uos2d61m43r7',
  environment: 'master',
  // paste accesstoken
  accessToken: accessToken
})

export async function getStaticProps() {

  const res = await client.getEntries()
  const products = res.items
  console.log('products', products)

  return {
    props: {
      products,
    },
  }
}

const products = ({products}) => {

  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      {products.map(product => <ProductCard key={product.fields.id} product={product} /> )}
    </div>
  )
}

export default products
