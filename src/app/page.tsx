import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeComponent from "./components/Home";
import Menu from "./components/Menu";



export default function Home() {
  return (
    <div>
      <Menu/>
      <Header/>
      <HomeComponent/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
