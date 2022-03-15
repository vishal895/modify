import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Graphic from './components/graphic2/graphic';
import Hr from './components/hrline/hr';
import Graphic3 from './components/graphic3/graphic3';
import Carousal from './components/carousal/carousal';
import Box from './components/box/box';
import ImageScroll from './components/navbar/ImagesScroll';
import Spliter from './components/spliter/spliter';
import About from './components/about/about';
import New from './components/new/new';
//import SplitPane from './components/split/split';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ImageScroll/>
      <Graphic/>
      <Hr/>
      <Graphic3/>
      <Carousal/>
      <About/>
      <New/>
      <Spliter/>
       <Box/> 
      <Footer/>
     
      
      
    </div>
  );
}

export default App;
