import React from 'react'
import { SplitPane } from 'react-multi-split-pane'
import "./split.css"

const Spliter = () => {
  return (
    <>
     
      <div className="split">

        <div className="col-md-12">
        <SplitPane split="vertical">
          <div className="oo">
           <h2 className="hl">GET RID OF COMPLEX ETL SETUPS WITH HEVO</h2>
            <p className="po">Hevo is a fully managed data pipeline solution that saves a large part of your set up cost, your team's bandwidth and time delays to go live. Additionally, Hevo integrations are regularly updated, ensuring you never have to worry about managing source API changes. Connect once and uninterruptedly get real-time data replicated to your data warehouse, ready for analysis.</p>
            <div className="image1">
               <img  className="sameHeightImg" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" /> 
              
            </div>
            <button type="button" class="btn btn-warning btn-lg">Warning</button>
            </div>
            <div className="oo">
              <h2 className="hl">PLANNING TO SETUP YOUR ETL SOLUTION IN-HOUSE?</h2>
              <p className="po">Creating an in-house ETL solution involves a large setup cost, and can take upwards of 2-3 months to go live. Further, you need to manage your team's SLAs and bandwidth, while coping with project delays. Over and above, maintaining source integrations with regular API changes can become a burden, leading to pipeline failures and data loss.</p>
              <div className="image2">  
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"  className="sameHeightImg"/> 
               
               </div>
               <button type="button" class="btn btn-warning btn-lg">Warning</button>
               </div> 
        </SplitPane>
        
      </div>
      </div>

    </>
  )
}

export default Spliter
