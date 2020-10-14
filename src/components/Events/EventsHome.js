import React from "react";
import "./EventsHome.css";

export const EventsHome = () => {
  return (
    <div className="StylesEventHome">
      <div className="view" id="Styles">
        <div className="mask rgba-gradient align-items-center">
          <div className="container">
            <div className="row">
            <img className="StyleImg" src="/img/Home/Personas.jpg" alt="" />
              <div
                className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                  EVENTOS{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  La “Protectora de Animales Domingo Faustino Sarmiento” realiza
                  eventos para recaudar fondos.
                </h6>
                <p className="text-sm-left font-weight-bold ">
                Tambien puedes ayudarnos con:
                ♥ Ser Socio 
                ♥ Voluntariado 
                ♥ Hogares de Tránsito 
                ♥ Rescate de Animales 
                ♥ Control de la Población Animal 
                ♥ Transporte 
                </p>
              </div>
              {/* <img className="StyleImg" src="/img/Home/Personas.jpg" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};