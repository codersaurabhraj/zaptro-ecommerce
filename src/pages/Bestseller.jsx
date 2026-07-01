import React, { useState } from 'react'
import Card from '../components/Card'
import bestsellerProducts from '../data/BestsellerProducts'
import SearchBar from '../components/SearchBar'

const Bestseller = ({ cart, setCart }) => {

  const [search, setSearch] = useState("")
  const filterProducts = bestsellerProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className='card-arr'>

        {/* {filterProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
          />
        ))} */}


        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <Card key={product.id} product={product} cart={cart} setCart={setCart} />
          ))
        ) : (
          <h2 style={{color:'#0097aa'}} className='no-products'>No Products Found</h2>
        )}

      </div>

    </>
  )
}

export default Bestseller