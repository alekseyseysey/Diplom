import { Route, Routes } from "react-router-dom";
import React from 'react';
import {LogoBooks, Likes, Books, LoginPage, ShoppingCartBook, NewBookClick, NewBookPage} from "../../src/components/Header/indexHeader.tsx";


function Router() {
    return (
      <>  
  <Routes>
       <Route  path="/" element={<LogoBooks/>}></Route>
       {/* <Route  path="/:id" element={<NewBookPage/>}></Route> */}
       <Route  path="/:isbn13" element={<NewBookClick/>}></Route>
       <Route path="/Likes" element={<Likes/>}></Route>
       <Route path="/shoppingCart" element={<Books/>}></Route>
       <Route path="/Books/:id" element={<ShoppingCartBook/>}></Route>
       <Route path="/Account" element={<LoginPage/>}></Route>

  </Routes>
  </>
    );
  }
  
  export default Router;
  