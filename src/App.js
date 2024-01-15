import Header from "./components/Header";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Education from "./components/pages/Education";
import Hobbies from "./components/pages/Hobbies";
import Profile from "./components/Profile"

function App() {
  let Page;
  switch (window.location.pathname) {
    case "/":
      Page = Home;
      break;
    case "/Projects":
      Page = Projects;
      break;
    case "/Education":
      Page = Education;
      break;
    case "/Hobbies":
      Page = Hobbies;
      break;
    default:
  }

  return (
    <>
      <Header />
      <Profile />
      <Page />
    </>
  );
}

export default App;
