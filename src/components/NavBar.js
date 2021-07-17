import React from "react";
import CartWidget from './CartWidget.js'

function NavBar () {

    return (
        <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/src/html/inicio.html">
            <img src="https://www.casaseca.com.ar/drive/repo/editorweb/2759logo.png" width="100" height="100" class="d-inline-block align-top" alt="logo"></img>
             
          </a>
        </nav>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light menu1">
    <a class="navbar-brand" href="/src/html/inicio.html">CASA SECA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/src/html/inicio.html">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/src/html/locales.html">Locales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/src/html/productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/src/html/contacto.html">Contactou</a>
        </li>
        <CartWidget />

      </ul>
    </div>
  </nav>
      </div>
    )
}



export default NavBar;