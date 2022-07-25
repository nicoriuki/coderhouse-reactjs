import "./main.css";
import Navbar from "./common/navbar/Navbar";
import Pacientes from "./Views/Pacientes";
import Footer from "./common/footer/Footer";

function App() {
      return (
            <>
                  <div className="GridArea">
                        <Navbar />
                        <Pacientes />
                        <Footer />
                  </div>
            </>
      );
}

export default App;
