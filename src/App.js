import logo from './logo.svg';
import './App.css';
import {Card, Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div className="buttonHeader">
      <Button className="backTo" size="lg" >Go Back</Button>
      <Button className="firstButton" size="lg" >Sign In</Button>
      <Button className="secondButton" variant="primary" size="lg">Register</Button>
        </div>
       <div className="footer">
        <h1>Dream 11</h1>
        </div>
      </header>
      <div className="App-body">
      
      <img src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/ipl-logo2020.png" alt ="Logo" height="200" width="200"></img>
       <div >Please Select Your Fantasy Mode</div>
       <div className="fantasy_league">
       <div className="first">
         <p>Create one team for the tournament,make transfers every matchday </p><br/>
         <p>Be the tournament champion,win exciting prizes!</p>
         <p >Play fantasy League</p>
       </div>
       <div className="first">
         <p>Create Your Team Daily</p><br/>
         <p>Win Prizes Every Match</p>
       </div>
       
       </div>
      </div>
      
    </div>
  );
}

export default App;
