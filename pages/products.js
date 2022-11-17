import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useRouter } from 'next/router'
import { envObj } from '../env.mjs'


const client = createClient({
  // space: envObj.space,
  // environment: envObj.environment,
  // accessToken: envObj.accessToken
  space: process.env.SPACE,
  environment: process.env.ENVIRONMENT,
  accessToken: process.env.ACCESSTOKEN,
})

export async function getStaticProps() {

  const res = await client.getEntries()
  const products = res.items

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
