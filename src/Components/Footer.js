import React, {Component} from "react";

class Footer extends Component{
    render() {
        return(
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">Acerca de AMIDI</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur
                                    reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut
                                    veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                            </div>


                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Navigations</h3>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Inicio</a></li>
                                        <li><a href="#">Nosotros</a></li>
                                        <li><a href="#">Contactanos</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Politicas de privacidad</a></li>
                                        <li><a href="#">Terminos y condiciones</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h3 className="footer-heading mb-4">Siguenos</h3>

                            <div>
                                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                            </div>


                        </div>

                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p> Copyright &copy; All rights reserved
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;