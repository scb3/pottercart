import Item1 from '../../images/Item1.jpg'
import Item2 from '../../images/Item2.jpg'
import Item3 from '../../images/Item3.jpg'
import Item4 from '../../images/Item4.jpg'
import Item5 from '../../images/Item5.jpg'
import Item6 from '../../images/Item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'



//Add in the Books, we can add more by just adding a ID, Title, Description, Price and Image
const initState = {
    items: [
        {id:1,title:'Harry Potter and the Philosophers Stone', desc: "'Harry Potter and the Philosophers Stone'", price:8,img:Item1},
        {id:2,title:'Harry Potter and the Chamber of Secrets', desc: "Harry Potter and the Chamber of Secrets", price:8,img: Item2},
        {id:3,title:'Harry Potter and the Prisoner of Azkaban', desc: "Harry Potter and the Prisoner of Azkaban",price:8,img: Item3},
        {id:4,title:'Harry Potter and the Goblet of Fire', desc: "Harry Potter and the Goblet of Fire", price:8,img:Item4},
        {id:5,title:'Harry Potter and the Half Blood Prince', desc: "Harry Potter and the Half Blood Prince", price:8,img: Item5},
        {id:6,title:'Twilight', desc: "Twilight: Part 1",price:8,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState, action)=>{
    

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }
  return state
}

export default cartReducer