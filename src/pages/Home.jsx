import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import People from "../components/People";
import Programs from "../components/Programs";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Jumbotron />
      </header>
      <main>
        <Programs />
        <People />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
