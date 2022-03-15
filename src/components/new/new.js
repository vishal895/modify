import React from 'react'
import "./new.css"

const New = () => {
  return (
    <div className="news">
        <div className="container">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="updates">WELCOME TO MANDELBULB UPDATES</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkA0NJq_W1kf5oMJwf4yYUuWp5YkphfcBDQ&usqp=CAU" className="imge"/>
                    </div>
                    < div className="col-md-6">
                        <h1 className="hrd">NEWS UPDATES</h1>
                        <button type="button" class="btn btn-warning btn-lg">TRENDING UPDATES</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New