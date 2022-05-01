import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const initState= {
    transactions:[
        
    ]
}
export const GlobalContext = createContext(initState)
export const GlobalProvider = ({children})=>{
   const[state,dispatch] = useReducer(AppReducer,initState)
   function deleteTransaction(id){
       dispatch({
           type:'DELETE_TRANSACTION',
           payload:id
       })
   }
   function addTransaction(transaction){
       dispatch({
           type:'ADD_TRANSACTION',
           payload:transaction 
       })
   }
   return(
       <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>{children}</GlobalContext.Provider>
   )
}