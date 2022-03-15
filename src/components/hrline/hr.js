import React from 'react'
import "./hr.css"

const Hr = () => {
    return (
        <div className="hr">
            <div className="container">
                <div className="col-md-12">
                    <h4 className="head">FULLY AUTOMATED AND RELIABLE DATA PIPELINES FOR FASTER ANALYTICS</h4>
                    <p className="para">Hevo's fully managed and automated data pipeline loads all your data to the warehouse at scale in real-time, ready for analysis.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Icon</h1>
                            <h4 className="h4">Super Easy to Setup</h4>
                            <p className="p">Using Hevo's no-code and highly intuitive interface, you can set up a pipeline in minutes effortlessly in just a few clicks.</p>
                        </div>
                        <div className="col-md-4">                           
                            <h1>Icon</h1>
                            <h4 className="h4">Zero Engineering</h4>
                            <p className="p">Anyone in your data team can set up a data pipeline on Hevo. It saves your engineering hours for the core product.</p>    
                        </div>
                        <div className="col-md-4">
                            <h1>Icon</h1>
                            <h4 className="h4">Zero Maintenance</h4>
                            <p className="p">Set up once and Hevo manages all your pipeline operations and future changes automatically. Leave behind ETL scripts and Cron jobs.</p>
                        </div>
                        <div className="col-md-4">   
                            <h1>Icon</h1>
                            <h4 className="h4">Fault-Tolerant</h4>
                            <p className="p">Hevo automatically detects any anomaly in the incoming data and notifies you instantly. Further, any affected records within the pipelines are set aside for corrections, ensuring your analytics workflows are never impacted</p>  
                        </div>
                        <div className="col-md-4">
                            <h1>Icon</h1>
                            <h4 className="h4">Analytics Ready Data</h4>
                            <p className="p">Hevo has in-built data formatting and transformation capabilities. It automatically prepares your data for analytics in minutes.</p>
                        </div>
                        <div className="col-md-4">
                            <h1>Icon</h1>
                            <h4 className="h4">Built To Scale</h4>
                            <p className="p">Hevo is built to handle millions of records per minute without latency, ensuring your data pipelines scale as your business grows.</p>
                        </div>
                        
                    </div>
                </div>
                <button type="button" class="btn btn-warning btn-lg">Warning</button>
            </div>
        </div>
    )
}

export default Hr