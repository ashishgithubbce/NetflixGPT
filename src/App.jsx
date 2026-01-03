
import Body  from "./components/Body"
import Login  from "./components/Login"
import Browse from "./components/Browse"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/browse" element={<Browse />} />
     </Routes>
    </>
  );
}
export default App;
