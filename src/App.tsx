import './App.scss';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { HeaderWrapperStyle, MainContainerStyle, WrapperStyle } from './utils/styles';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/CartPage/Cart';
import { NotFound } from './pages/NotFound';
function App() {
  return (

       <WrapperStyle>
       <HeaderWrapperStyle>
          <Header/>
       </HeaderWrapperStyle>

      <MainContainerStyle>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        {/* <Route render={props}></Route> */}
        </Routes>
      </MainContainerStyle>
     </WrapperStyle>
  );
}
export default App;
