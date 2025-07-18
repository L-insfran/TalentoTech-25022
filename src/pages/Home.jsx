import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Nav />
      
      <main className="flex-grow">
        <Main />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;