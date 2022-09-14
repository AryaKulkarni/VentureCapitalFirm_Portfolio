import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainBody from "./Components/MainBody"
import CompaniesData from "./Components/CompaniesData"
import Companies from "./Components/Companies"






const companyElements=CompaniesData.map(company=> {
  return (
    <Companies company={company}/>
  )})
  console.log(companyElements)

function App() {






  return (
    <div className="App container">
      {/* <Header/> */}
      <MainBody/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
