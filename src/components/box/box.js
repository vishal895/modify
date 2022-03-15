import React from 'react'
import "./box.css"

const Box = () => {
  return (
    <div className="bo">
    <div className="container">
      <div className="col-md-12">
        <h4 className="he">READ OUR RESOURCES ON BUILDING EFFICIENT MODERN DATA STACK</h4>
        <p className="pe">Discover best practices, tutorials and in-depth guides around data warehouses, building data pipelines, ETL processes, and more.</p>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <img  className="image" src="https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
              <h1 className="hc">Should you build or buy a data pipeline?</h1>
              <p className="gg">Explore the factors that drive the build vs buy decision for data pipelines</p>
            </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img  className="image" src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"/>
                <h1 className="hc">Guide to evaluate data pipeline solutions</h1>
                <p className="gg">Learn 10 key factors to consider while selecting the right data pipeline for your requirements</p>
              </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img  className="image" src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"/>
                  <h1 className="hc">Critical factors for a scalable data pipeline solution</h1>
                  <p className="gg">Explore the critical factors to consider while building scalable data pipeline solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        )
}
        export default Box