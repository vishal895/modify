import React from 'react'
import "./graphic.css"

const Graphic = () => {
  return (
    <div className="graphic">
        <div className="container">
            <div className="col-md-12">
                <div className="row">
                    <h2 className="heading">PRE-BUILT INTEGRATIONS TO 100+ DATA SOURCES</h2>
                    <p className="paragraph">Hevo supports 100+ ready-to-use integrations across Databases, SaaS Applications, Cloud Storage, SDKs and Streaming Services. Effortlessly connect any source and analyze data across various data formats.</p>

                </div>
                <h1>graphic</h1>
                <button type="button" class="btn btn-warning">VIEW ALL INTEGRATIONS</button>
            </div>
        </div>
    </div>
  )
}

export default Graphic