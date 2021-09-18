import {createStore} from "redux"


let initialState ={
    products:[],
    favouriteItem:[],
    totalPrice:""
}

function reducer(prevState=initialState,action){
    console.log(action.type)
    console.log(action.payload)
    switch(action.type){
        // case 'CARTITEMS':{
        //     return{
        //        products:prevState.products=action.payload
                
        //     }
        // }
        case 'ADDITEMS':{
            let exist = prevState.products.find((value,index) => {return value.id === action.payload.id})

            if (exist){
                console.log("true")

                return{
                    //    products:[...prevState.products,action.payload]
                    products:prevState.products.map((value,index)=>value.id===action.payload.id?
                     {... value,qty:value.qty + 1}: value)
                        
                    }
            }
            else {
                console.log("ff")
                return{
                    products:[...prevState.products,{...action.payload,qty:1}]
                }

            }
        }

        case 'DELETEITEMS':{
            return{
                products:prevState.products.filter((item) => { return item.id !== action.payload.id })
                
            }

        }
    
       case 'INCREASE':{
            return{  
                products:prevState.products.map((item)=>item.id===action.payload.id?{...action.payload,qty:action.payload.qty+1}:item)
            }
        }
    
       case 'DECREASE':{
            return{
               
                 products:prevState.products.map((item)=>item.id===action.payload.id && action.payload.qty>1 ?{...action.payload,qty:action.payload.qty-1}:item)
            }
        }

        case 'FAVOURITEITEM':{
            let exist = prevState.favouriteItem.find((value,index) => {return value.id === action.payload.id})

            if (exist){
                console.log("true")

                return{
                    favouriteItem:prevState.favouriteItem.filter((item) => { return item.id !== action.payload.id })
                        
                    }
            }
            else {
                console.log("ff")
                return{
                    favouriteItem:[...prevState.favouriteItem,action.payload]
                    
                }

            }
        }

        case 'PRICE':{
            return{
                
                 totalPrice:prevState.totalPrice=action.payload
            }
        }
    }

    console.log(prevState.products)
  
    return prevState
    
}

export let store =createStore(reducer)
