let State ={
    products:[],  // shopping cart items
    totalprice:0 ,// The total price of the selected items
}

export default function addpro(prevState=State,action){
    switch(action.type){
    // add products to shopping cart
        case 'ADDITEMS':{
            let exist = prevState.products.find((value,index) => {return value.id === action.payload.id})
            if (exist){
                return{
                    products:prevState.products.map((value,index)=>value.id===action.payload.id?
                     {... value,qty:value.qty + 1}: value),
                    totalprice:prevState.totalprice+action.payload.price

                        
                    }
            }
            else {
                return{
                    products:[...prevState.products,{...action.payload,qty:1}],
                    totalprice:prevState.totalprice+action.payload.price

                }

            }
        }
    // delete a specific product in the shopping cart
        case 'DELETEITEMS':{
            return{
                products:prevState.products.filter((item) => { return item.id !== action.payload.id })
            }

        }
    // Increase the quantity of a specific product in the shopping cart
       case 'INCREASE':{
            return{  
                products:prevState.products.map((item)=>item.id===action.payload.id?{...action.payload,qty:action.payload.qty+1}:item)
                ,totalprice:prevState.totalprice+action.payload.price

            }
        }
    // decrease the quantity of a specific product in the shopping cart
       case 'DECREASE':{
            return{
               
                 products:prevState.products.map((item)=>item.id===action.payload.id && action.payload.qty>1 ?{...action.payload,qty:action.payload.qty-1}:item)
                 ,totalprice:action.payload.qty>1 ? prevState.totalprice-action.payload.price: prevState.totalprice

                }
        }

    }


    return prevState
    
}

