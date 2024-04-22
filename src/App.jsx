import Addmovie from "./Components/AddMovie";
import Editmovie from "./Components/Editmovie";
import Home from "./Components/Home";
import Login from "./Components/LogIn";
import Moviedetails from "./Components/MovieDetails";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Protector from "./Components/Protector";
import Search from "./Components/Search";
import Signup from "./Components/SignUp";
import Watchlist from "./Components/Watchlist";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() 
{
  return(
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/" element={<Protector Child={Home}/>}/>

          <Route path="/addmovie" element={<Protector Child={Addmovie}/>}/>

          <Route path="/favmovie" element={<Protector Child={Watchlist}/>}/>

          <Route path="/profile" element={<Protector Child={Profile}/>}/>

          <Route path="/moviedetails/:id" element={<Moviedetails/>}/>

          <Route path="/edit/:id" element={<Editmovie/>}/>

          <Route path="/search/:keyword" element={<Search/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;






// import logo from './logo.svg';
/*{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }*/

      // function App() {

      //   let [count1, setCount] = useState(10);
      //   let [title, setTitle] = useState("Hello");
        
      //   useEffect(()=>{
      //     document.title = title;
      //     console.log("title changed");
      //   },[title])
      
      //   let changeTitle=()=>{
      //     setTitle(title+"o")
      //   }
      
      //   return (
      //     <>
      //       <h1>COUNT1 : {count1}</h1>
      //       <hr />
      //       <button onClick={()=>{setCount(count1+10)}}>Change c1</button><br />
      //       <button onClick={changeTitle}>update title of tab</button>
      //     </>
      
      //   );
      // }
      // export default App;