/** @format */

import store from "../../store/store";
import Service from "./service";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

export default function Services(props) {
  // const storage = JSON.parse(window.localStorage.getItem("service"));
  // if(storage){
  //   if(services[0] == undefined && (storage!=null)){
  //     services = storage;
  //   }

  // }
  // console.log("services",1),
  const [serv, setService] = useState([]);
  useEffect(() => {
    async function fetchServices() {
      const request = await axios.get(config.url);
      // console.log(request.data)
      const data = request.data;
      setService(data);
      store.dispatch({ type: "ON_LOAD", data });
    }
    fetchServices();
  }, []);

  return (
    <div className='row-12'>
      <div className='row w-100 justify-content-center'>
        <h2 className='mt-5 border-bottom pb-3'>Services</h2>
      </div>
      <div className='row justify-content-center'>
        {serv.map((service) => (
          <Service key={service.id} value={serv[serv.indexOf(service)]} 
          click = {()=>props.click(service)}/>
        ))}
      </div>
    </div>
  );
}
