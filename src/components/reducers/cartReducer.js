import Item1 from '../../images/Item1.jpg'
import Item2 from '../../images/Item2.jpg'
import Item3 from '../../images/Item3.jpg'
import Item4 from '../../images/Item4.jpg'
import Item5 from '../../images/Item5.jpg'
import Item6 from '../../images/Item6.jpg'


const initState = {
    items: [
        {id:1,title:'Harry Potter and the Philosophers Stone', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8,img:Item1},
        {id:2,title:'Harry Potter and the Chamber of Secrets', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8,img: Item2},
        {id:3,title:'Harry Potter and the Prisoner of Azkaban', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:8,img: Item3},
        {id:4,title:'Harry Potter and the Goblet of Fire', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8,img:Item4},
        {id:5,title:'Harry Potter and the Half Blood Prince', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8,img: Item5},
        {id:6,title:'Twilight', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState)=>{
    
    return state;

}
export default cartReducer;
