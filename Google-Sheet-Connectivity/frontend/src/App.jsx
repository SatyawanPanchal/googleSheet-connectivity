import { useContext } from "react"
import TableLayout from "./Components/Tablelayout/TableLayout"
import { StoreContext } from "./Components/Context/Storecontext"
 

 
 

function App() {
  const{dataFromTable}=useContext(StoreContext)
  
  
 

  return (
    <>
     
       {dataFromTable?<TableLayout dataFromTable={dataFromTable}/>:null}

 
    </>
  )
}

export default App
