// import logo from './logo.svg';
import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto'

function App() {
  return (
    <div className="body">
     

     <ProfilePhoto />
    
     <FullName />

     <Address />

    <h5> AGE: <text className="Contain">24</text> </h5>
    <h5> OCCUPATION: <text className="Contain">Recently STUDENT, Future web developer</text> </h5>
    <h5> STATUS: <text className="Contain">SINGLE</text> </h5> 
    <h5> LOCATION: <text className="Contain">Gafsa, Tunisia</text></h5>
    <h5> INTEREST: <text className="Contain">Reading and Learning </text></h5>
    <h5> BIO: <text className="Contain">You are not responsible for the programming you picked up in childhood, However, as an adult, you are the one hundred percent responsible for fixing it.</text></h5>
     
     
     
     
    


    </div>
  );
}

export default App;
