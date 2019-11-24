import React,{Component} from 'react';

class Company extends Component{
    render() {
        return(
            <div className="site-section">
                <div className="container">
                    {/*<div className="row mb-5 justify-content-center">*/}
                    {/*    <div className="col-md-7">*/}
                    {/*        <div className="site-section-title text-center">*/}
                    {/*            <h2>Our Agents</h2>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa*/}
                    {/*                eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi*/}
                    {/*                reiciendis quis! Optio minima quibusdam, laboriosam.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="assets/images/mision1.png" alt="Image" className="img-fluid rounded mb-4" />

                                    <div className="text">

                                        <h2 className="mb-2 font-weight-light text-black h4 text-center">Misión</h2>
                                        {/*<span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>*/}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam
                                            non quis facere blanditiis praesentium est. Totam atque corporis nisi,
                                            veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!</p>
                                    </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="assets/images/vision1.png" alt="Image" className="img-fluid rounded mb-4" />

                                    <div className="text">

                                        <h2 className="mb-2 font-weight-light text-black h4 text-center">Visión</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae
                                            voluptates culpa earum similique corrupti itaque veniam doloribus amet
                                            perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni!</p>
                                    </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="assets/images/lo1.png" alt="Image" className="img-fluid rounded mb-4" />

                                    <div className="text">

                                        <h2 className="mb-2 font-weight-light text-black h4 text-center">Valores</h2>
                                        {/*<span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>*/}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto,
                                            inventore, iure dolorum officiis modi repellat nobis, praesentium
                                            perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia
                                            libero veniam quo.</p>
                                    </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Company;