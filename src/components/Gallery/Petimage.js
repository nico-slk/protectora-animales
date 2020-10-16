import React, { useEffect, useState } from "react";
import Info from "../Info/Info";
import styles from './Gallery.css'

import { db } from "../../index";

const Petimage = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("pet").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
     <div>
        <div className="col-md-12 d-flex justify-content-center     mb-5">
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="all">Todos</button>
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="1">Perros</button>
          <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="2">Gatos</button>
         </div>
       </div>
      
      <div>
          <div className="gallery" id="gallery">
            {links.map((pet) => (
            <div  key={pet.id}>
                
                    <div className="imageInfo">
                    <img className="img-fluid" src={pet.avatar} alt={pet.name} />
                        {/* <h4>nombre: {pet.name}</h4> */}
                    <div className="memberInfo">
                        <h2 className="mb-2 font-weight-light h3 ">
<<<<<<< HEAD
                        <Info petId={pet.id} key={pet.id}/>
=======
                            <Info petId={pet.id} key={pet.id}/>
>>>>>>> c0a1d7b8fde400fc3058b6ddebe49f1f20fb2040
                        </h2>
                       
                    </div>
                    </div>
               
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Petimage;
