import logo from './logo.svg';
import './App.css';

import Header from "./MyComponents/Header";
import {Body} from './MyComponents/Body';
import {Mainbody} from './MyComponents/Mainbody';

function App() {
  let myVariable = 345;
  return (
    <>
      <Header/>
      <Body/>
      <Mainbody/>
     
    </>
  );
}

export default App;
