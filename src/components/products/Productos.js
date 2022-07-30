import React from 'react'
import { View } from 'react-native'
import ProductCard from '../productCard/ProductCard';


const Productos = ({products}) => {

  return (

    <View style={{padding:16}}>
        <View
            style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around'
            }}
        >
            {
                products.map((data) => {
                    return <ProductCard data={data} key={data.id}/>
                })
            }
        </View>
    </View>
  )
}

export default Productos