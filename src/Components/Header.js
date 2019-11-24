import React, {Component} from "react";

class Header extends Component{
    render() {
        return (
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <div className="site-navbar mt-4">
                    <div className="container py-1">
                        <div className="row align-items-center">
                            <div className="col-7 col-md-7 col-lg-3">
                                <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0"><strong>AMIDI<span
                                    className="text-danger">.</span></strong></a></h1>
                            </div>
                            <div className="col-5 col-md-5 col-lg-9">
                                <nav className="site-navigation text-right text-md-right" role="navigation">

                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                                            <span className="icon-menu h3"></span></a>
                                    </div>
                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li className="active">
                                            <a href="#">Inicio</a>
                                        </li>
                                        <li><a href="#">Nosotros</a></li>
                                        <li className="has-children">
                                            <a href="#">Oferta Académica</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Maestrías</a></li>
                                                <li><a href="#">Especialidades</a></li>
                                                <li><a href="#">Cursos y diplomados</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Aspirantes</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Preguntas frecuentes</a></li>
                                                <li><a href="#">Requisitos de ingresos</a></li>
                                                <li><a href="#">¿Porque estudiar en AMIDI?</a></li>
                                                <li><a href="#">Registro de Aspirantes</a></li>
                                                <li><a href="#">Contacto</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Alumnos</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Calendario</a></li>
                                                <li><a href="#">Bolsa de trabajo</a></li>
                                                <li><a href="#">Vinculación</a></li>
                                                <li><a href="#">Actividades</a></li>
                                                <li><a href="#">Investigación</a></li>
                                                <li><a href="#">Tramites y guías</a></li>

                                            </ul>
                                        </li>
                                        <li><a href="#">Aula Virtual</a></li>
                                        <li className="has-children">
                                            <a href="#">Servicios</a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Planta Académica</a></li>
                                                <li><a href="#">Investigación</a></li>
                                                <li><a href="#">Consultoría y Asesoría</a></li>
                                                <li><a href="#">Capacitación</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export  default  Header;