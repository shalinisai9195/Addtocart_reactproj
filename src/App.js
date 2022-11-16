import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  let [count,Setstatus] = useState(0);
  
  let [toogle,Settoogle] = useState(true);
  let [toogle1,Settoogle1] = useState(true);
  let [toogle2,Settoogle2] = useState(true);
  return <>
 <Navbar data={{count,Setstatus}}/>
   <Header/>
  <section className="py-5">
     <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                  <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                       <div className="card-body p-4">
                           <div className="text-center">
                                    {/* <!-- Product name--> */}
                              <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00
                            </div>
                        </div>
                            {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle?<button className="btn btn-outline-dark mt-auto" onClick={
                              ()=>{Setstatus(++count);
                                  Settoogle(!toogle);
                                  }}>
                                 Add to cart</button>
                                 :
                                 <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                 Setstatus(--count);
                                 Settoogle(!toogle);
                                 }}>
                                 Remove</button>

                            }
                                
                            
                          </div>
                      </div>
                  </div>
                  
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                       <div className="card-body p-4">
                           <div className="text-center">
                                    {/* <!-- Product name--> */}
                              <h5 className="fw-bolder">Dairy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $30.00
                            </div>
                        </div>
                            {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle1?<button className="btn btn-outline-dark mt-auto" onClick={
                              ()=>{Setstatus(++count);
                                Settoogle1(!toogle1);
                                  }}>
                                 Add to cart</button>
                                 :
                                 <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                 Setstatus(--count);
                                 Settoogle1(!toogle1);
                                 }}>
                                 Remove</button>

                            }
                                
                            
                          </div>
                      </div>
                  </div>
                  
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                       <div className="card-body p-4">
                           <div className="text-center">
                                    {/* <!-- Product name--> */}
                              <h5 className="fw-bolder">Auto Product</h5>
                                    {/* <!-- Product price--> */}
                                    $70.00
                            </div>
                        </div>
                            {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle2?<button className="btn btn-outline-dark mt-auto" onClick={
                              ()=>{Setstatus(++count);
                                  Settoogle2(!toogle2);
                                  }}>
                                 Add to cart</button>
                                 :
                                 <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                  Setstatus(--count);
                                 Settoogle2(!toogle2);
                                 }}>
                                 Remove</button>

                            }
                                
                            
                          </div>
                      </div>
                  </div>
                  
             </div>

          </div>
      </div>
                    
     </section>
  </>
}

export default App;
