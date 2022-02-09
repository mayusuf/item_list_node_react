import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';


const App = () => {
  return (
    
    <Home />
    
    
    // <div>
    //   <div className="navbar">
    //     <div className="links"> 
    //       <a href="/">Main Page</a>
    //       <a href="/createpost">Create Post</a>
          
    //     </div>
    //   </div>
      // <BrowserRouter>
      // <Routes>
      //   <Route path="/" exact element={<MainPage />} />
      //   <Route path="/createpost" element={<CreatePost />} />
      //   <Route path="/post/:postId" element={<Post />} />
      // </Routes>
      // </BrowserRouter>
    // </div>
    
  )};
  
export default App;