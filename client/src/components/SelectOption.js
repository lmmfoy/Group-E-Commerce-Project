//yarn add react-select
import Select from 'react-select';
import { useState } from 'react';

const SelectOption = (props) =>{
  
  const [itemQuantity, setItemQuantity] = useState(null);
  
  let itemQuantityArray = [];
  for(let i = 0; i< props.quantity+1; i++){
    itemQuantityArray.push( 
      {value: i, label: i}
    )
  }
  // setItemQuantity(itemQuantityArray);
  // console.log(itemQuantityArray);
  return (
    <Select
      options={itemQuantityArray}
      
    />
  )  
}

export default SelectOption;