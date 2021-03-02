import './App.css';
import DoneButton from './DoneButton'
import Checklist from './Checklist'

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Checklist />
      <DoneButton />
    </div>
  );
}

export default App;
