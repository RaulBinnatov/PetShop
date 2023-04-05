import './App.css';
import Header from './components/Header';
import First from './components/First';
import Footer from './components/Footer';
import SliderFirst from './components/SliderFirst';
import SliderSecond from './components/SliderSecond';
import ContFirst from './components/ContFirst';
import ContSecond from './components/ContSecond';

function App() {
  return (
    <div>
      <Header />
      <First />
      <SliderFirst title='Heyvanlar üçün məhsullar'/>
      <ContFirst title='Yeni & Trend'/>
      <ContSecond title='Trend məhsullar'/>
      <SliderSecond title='Xidmətlərimiz'/>
      <Footer/>
    </div>
   
  );
}

export default App;
