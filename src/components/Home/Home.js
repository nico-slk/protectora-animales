import React, { useState, useEffect } from "react";
import { Carrousel } from "../Carrousel/Carrousel"
import { Carrousel2 } from "../Carrousel/Carrousel2";
import { EventsHome } from "../Events/EventsHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export const Home = (props) => {

  return (
    <div className="StyleHome">
      <div>
        <div >
          <Carrousel2 />
          <container>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">¡Atención!</h4>
              <p>El refugio Sarmiento es una ONG (Organización No Gubernamental).</p>
              <p>La protectora no recibe animales hoy en día porque estamos trabajando al límite de nuestra capacidad. Los animales que eventualmente ingresan son los que están en extrema emergencia, para  que el refugio no sea un lugar de depósito...</p>
              <hr></hr>
              <p className="mb-0">El principal objetivo consiste en cuidar y asistir en la adopción para entonces reubicar a nuestros animales..</p>
            </div>
          </container>
          <div className="row">
            <div className="aboutus" data-wow-delay="0.3s">
              <div className="title container text-center h-100 bg-white d-flex justify-content-center align-items-center">
                <h1 className="h1-responsive font-weight-bold mt-sm-5 text-center">
                  PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO{" "}
                </h1>
                <div >
                  <Link to="/AboutUs">
                    <Button variant="info" size="lg">
                      ¡Conocenos!
                    </Button>{' '}
                  </Link>
                </div>
              </div>
              {/* <img className="StyleImg"
                src="/img/Gallery/Dogs/Dogo4.jpg"
                alt=""
              /> */}
              <iframe width="683" height="384" src="https://www.youtube.com/embed/w-tu_Wpsz3U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <Carrousel />
        </div>
      </div>
      <EventsHome />
    </div>
  );
};
