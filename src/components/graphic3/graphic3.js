import React from 'react'
import "./graphic3.css"

const Graphic3 = () => {
    return (
        <div className="g3">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="lo">
                        <div className="col-md-6">
                            <h4 className="h4">Reverse ETL - Send data from Warehouse to your Business Applications</h4>
                            <p className="p">Make data and insights in your Warehouse Actionable using Hevo Activate (Reverse ETL)</p>
                            <ul className="list">
                                <li className="li"> Send Product usage data into your Sales CRM.</li>
                                <li className="li">Build 360-degree customer profiles in your CRM for your sales team.</li>
                                <li className="li">Enable support teams see holistic customer profile within Helpdesk software.</li>
                            </ul>
                            <div className="btp">
                              <button type="button" class="btn btn-warning ">EXPLORE ACTIVATE</button>
                              <button type="button" class="btn btn-outline-warning ">TRY ACTIVATE FOR FREE</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>graphic</h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphic3