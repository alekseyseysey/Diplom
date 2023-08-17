import NewReleases from "./helpers/newReleses.tsx";
import Footer from "./components/Footer/footer.tsx";
import Header from "./components/Header/header.tsx";
import Router from "./router/route.tsx";


function App() {
  return (
    <div className="wrapper">
<Header/>  
<NewReleases /> 
<Router/>
<Footer/>
</div>
  );
}

export default App;

