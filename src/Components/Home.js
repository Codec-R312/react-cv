import Profile from "../Components/Profile";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Skills from "../Components/Skills";

const Home = () => {
  return ( 
    <section> 
      <div className="row">
        <div className="col s12 m12 l4 amber">
           <Profile/>
           <Contact/>
           <Skills/>
        </div>
        <div className="col s12 m12 l4 white">
            <About/>
            <Education/>
        </div>
      </div>
    </section>
   );
}
 
export default Home;    