let initialState ={
    view:"vertical"
}

export default function productView(prevState=initialState,action){
    console.log(action.type)
    switch(action.type){

        case 'HORIZONTAL':{
            console.log(prevState.view)
            return{
            view:prevState.view="horizontal"
            
            }
        }

        case 'VERTICAL':{
            console.log(prevState.view)

            return{
            view:prevState.view="vertical"

            
            }
        }
          
    }

    

  
    return prevState
    
}

