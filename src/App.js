import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemList";

function App() {
  return (
    <>
      <Nav />
      <ItemListContainer greeting={'Welcome'} />
    </>
  );
}

export default App;
