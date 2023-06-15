import { ReactComponent as MaingImage } from '../../assets/images/main-image.svg';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MaingImage />
          </div>
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
