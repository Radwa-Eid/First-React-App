import "./welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="container">
        <div className="row welcomeContent">
          <div className='welcomeText'>
            <h1 className="welcomeHeading">Largest Classifieds In The World</h1>
            <p className="welcomePara">You can buy, sell anything you want.</p>
          </div>
          <div className='welcomeForm'>
            <from>
              <div className='row'>
                <input className="form-control" type="text" placeholder="What Are You Looking For?"/>
                <input className="form-control" type="text" placeholder="Location"/>
                <input className="form-control" type="text" placeholder="All Categories"/>
                <button className="form-control searchBtn">Search</button>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
