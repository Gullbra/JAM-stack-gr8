import React from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'uos2d61m43r7',
  environment: 'master',
  // paste accesstoken
  accessToken: accessToken
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
  console.log(context.params.id, 'our console')
  
  // const product = await client.getEntry(context.params.id)
  console.log('i am in products', context.params.id)
  const product = await fetch(`https://cdn.contentful.com/spaces/uos2d61m43r7/environments/master/entries/${context.params.id}?access_token=${accessToken}`)
  
  return {
    props: {
      product : await product.json()
    }, 
  }
}

const singleproduct = ({product}) => {
  console.log(product, 'consoleProd')

  return (
    <div>{product.fields.name}</div>
  )
}

export default singleproduct
