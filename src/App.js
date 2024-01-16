import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  let Page;
  switch (window.location.pathname) {
    case "/":
      Page = About;
      break;
    case "/Work":
      Page = Work;
      break;
    case "/Education":
      Page = Education;
      break;
    case "/Contact":
      Page = Contact;
      break;
    default:
  }

  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}

export default App;
