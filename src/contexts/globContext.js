import {createContext,useContext,useReducer} from 'react'

const GlobContext=createContext();

const initialState={
  products:[
      {
        id: 1,
        category: "Pizza",
        name: "Quattro formaggi",
        image: "https://isko88.github.io/pizza/1.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 79
      },
      {
        id: 2,
        category: "Pizza",
        name: "Carbonara",
        image: "https://isko88.github.io/pizza/2.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 79
      },
      {
        id: 3,
        category: "Pizza",
        name: "Philadelphia",
        image: "https://isko88.github.io/pizza/3.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 89
      },
      {
        id: 4,
        category: "Pizza",
        name: "Veggie",
        image: "https://isko88.github.io/pizza/4.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 10
      },
      {
        id: 5,
        category: "Pizza",
        name: "Margherita",
        image: "https://isko88.github.io/pizza/5.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 10
      },
      {
        id: 6,
        category: "Pizza",
        name: "Pizzasallad",
        image: "https://isko88.github.io/pizza/6.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 88
      },
      {
        id: 7,
        category: "Pizza",
        name: "Hawaiian",
        image: "https://isko88.github.io/pizza/7.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 10
      },
      {
        id: 8,
        category: "Pizza",
        name: "Pepperoni",
        image: "https://isko88.github.io/pizza/8.png",
        topping: [
          "Dough",
          "Mozzarella",
          "Cheddar",
          "Blue",
          "Parmesan"
        ],
        price: 10
      }
    ],
  basket:{
      items:[]
  }
}

function reducer(state,action)
{
  switch (action.type) {
    case "PRODUCTS_ADD_CART":
    return {
      ...state,
      basket:{
        ...state.basket,
        items:[
          ...state.basket.items,
          {
              id:action.payload,
              count:1
          }
        ]
          
      }
    };

    default:
      return state
  }

}

function GlobContextProvider({children})
{
 
    const [state, dispatch] = useReducer(reducer, initialState)
    const val={
      state,
      dispatch  
    }
     return (
         <GlobContext.Provider value={val}>
             {children}
         </GlobContext.Provider>
     )
}
function useGlobalContext()
{
    const context = useContext(GlobContext)
    return context;
}
export {
    GlobContextProvider,
    useGlobalContext
};