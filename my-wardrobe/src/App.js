import './App.css';
import Header from './components/Header';
import Card from './components/Card';
// Include Bootstrap
// Array of card items (objects)
// Function to repeat 3 times: map
// {} switch to JS in the return function
const App = () => {
  return (
    <div className="App">
      {/* Use the component */}
      <Header />
      <Card />    
      <Card />    
      <Card />    
      </div>
  );
}

export default App;
