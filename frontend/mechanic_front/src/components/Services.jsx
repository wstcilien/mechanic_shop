/** @format */

import store from "../store/store";
import Service from "./services/service";
export default function Services() {

  let dropOffServices = store.getState().serviceReducer.dropOff;
  const storage = JSON.parse(window.localStorage.getItem("dropOff"));
  if(storage){
    if(!dropOffServices && (storage.ids!=null)){
      dropOffServices = storage
    }
  }
  
  console.log(dropOffServices);

  
  return (
    <div className='row-12'>
      <div className='row w-100 justify-content-center'>
        <h2 className='mt-5 border-bottom pb-3'>Drop-off Services</h2>
      </div>
      <div className="row justify-content-center">
      {dropOffServices.map((service)=>(<Service key={service.id} value={dropOffServices[service.id]}/>))}
      </div>
      <div className='row w-100 justify-content-center'>
        <h2 className='mt-5 border-bottom pb-3'>Ordered Services</h2>
      </div>
    </div>
  );

  
}
