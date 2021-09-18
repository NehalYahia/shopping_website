let State ={
    products:[],
    totalprice:0
}

export default function addpro(prevState=State,action){
    console.log(action.type)
    switch(action.type){
    
        case 'ADDITEMS':{
            let exist = prevState.products.find((value,index) => {return value.id === action.payload.id})

            if (exist){
                console.log("true")

                return{
                    //    products:[...prevState.products,action.payload]
                    products:prevState.products.map((value,index)=>value.id===action.payload.id?
                     {... value,qty:value.qty + 1}: value),
                    totalprice:prevState.totalprice+action.payload.price

                        
                    }
            }
            else {
                console.log("ff")
                return{
                    products:[...prevState.products,{...action.payload,qty:1}],
                    totalprice:prevState.totalprice+action.payload.price

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
                ,totalprice:prevState.totalprice+action.payload.price

            }
        }
    
       case 'DECREASE':{
            return{
               
                 products:prevState.products.map((item)=>item.id===action.payload.id && action.payload.qty>1 ?{...action.payload,qty:action.payload.qty-1}:item)
                 ,totalprice:prevState.totalprice-action.payload.price

                }
        }

    }

       

          

    console.log(State)
  
    return prevState
    
}

