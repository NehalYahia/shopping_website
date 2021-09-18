
let initialState ={
    favouriteItem:[],
}

export default function favourite(prevState=initialState,action){
    switch(action.type){

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

    }

  
    return prevState
    
}

