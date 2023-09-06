import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';

function App() {

  const items = [
    {tab: "Tab 1", content: "Tab 1 content is showing here"},
    {tab: "Tab 2", content: "Tab 2 content is showing here"},
    {tab: "Tab 3", content: "Tab 3 content is showing here"}
  ]

  return (
    <div className="App">
      <Tab items={items}/>
    </div>
  );
}

export default App;
