import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina ' , as: 'a',target:"_blank", href:'http://www.pedidosya.com.ar/cadenas/poked'},
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile ' , as: 'a',target:"_blank", href:'https://www.pedidosya.cl/cadenas/poked'},
  { key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic', as: 'a', target:"_blank", href:'https://www.pedidosya.com.do/cadenas/poked' },
  { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama', as: 'a',target:"_blank", href:'https://www.pedidosya.com.pa/cadenas/poked' },
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong', as: 'a',target:"_blank", href:'https://www.foodpanda.hk/chain/ch0dk' },
]
const CountryList = () => {
  const action = (e, { value }) =>{
    console.log ("value", value)
  }
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
    onChange = {action}
  />
  )
}

export default CountryList
