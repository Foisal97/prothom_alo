import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="Container">
        <div className="Main">

          <div className="column1">

            
            <div className="firstDiv">
              <div style={{  flex: 2 }}>
                <Card />
              </div>
              <div style={{flex: 1 }}>
                <Card />
              </div>
            </div>


            <div className="secondDiv">
              <div>
                <Card />
                <Card />
                <Card />
              </div>
              <div>
                <Card />
                <Card />
                <Card />
              </div>
              <div>
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>



          <div className="column2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
