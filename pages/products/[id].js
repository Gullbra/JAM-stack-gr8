import React from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'uos2d61m43r7',
  environment: 'master',
  accessToken: 'GZfklotsMDbFn0zKONSCVc5AoXlF2OcX9tlUdzqUgLM'
})

export async function getStaticPaths() {
  return {
    paths: (await client.getEntries()).items.map(prod => ({
      params: {
        id: prod.sys.id
      }
    })),
    // paths: [{ params: { id: '1tDy37jH8LduQkUL7rA2SD' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps (context) {
  
  const product = await fetch(`https://cdn.contentful.com/spaces/uos2d61m43r7/environments/master/entries/${context.params.id}?access_token=GZfklotsMDbFn0zKONSCVc5AoXlF2OcX9tlUdzqUgLM`)
  
  return {
    props: {
      product : await product.json()
    }, 
  }
}

const singleproduct = ({product}) => {
  console.log(product, 'consoleProd')

  return (
    <div>
      <div>🪃</div>
      <h2>{product.fields.name}</h2>
      <p>{product.fields.description}</p>
      <h3>{product.fields.price}</h3>
    </div>
  )
}

export default singleproduct
