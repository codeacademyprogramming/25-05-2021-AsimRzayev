
import './App.css';

import Product from './components/Product';
import Basket from './components/Basket';
import {GlobContextProvider} from './contexts/globContext'

function App() {

  return (
    <>
    <GlobContextProvider>
    <div className="container-fluid ">
            <Basket/>
            </div>
   

    <div className="container ">
    <div className="row ">
        <div className="col-xl-12 text-center">
            <h2>Popular dishes</h2>
        </div>
    </div>
    <div className="row mt-5" >
    <Product/>
    </div>
</div>
</GlobContextProvider>
</>
  );
}

export default App;
