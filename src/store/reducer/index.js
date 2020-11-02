const INITIAL_STATE={  //this is a global state
    users: [{
        name: "Faizan",
        email: "mf@gamil.com"
    },
    {
        name: "Kashan",
        email: "mf@gamil.com"
    }
]
}

 export default (state =INITIAL_STATE,action) =>{
  
     //console.log("action ==>",action)

     switch (action.type){     //username update krna
        case "SETDATA":
            return({
                ...state,
                users : [...state.users,action.data] ,  //...state.user present data + action.data(new data)
              
            })
         
         default:
                return state
        }
   
 }

