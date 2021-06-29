import styled from "styled-components";
import background from "../assets/background.jpg";

const Hero = () => {
  return (
    <StyledHero className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Bags re-imagined for modern life</h1>
          <div className="shop-now-btn">
            <button className="button is-primary is-outlined" id="shop-now">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${background}) center/cover no-repeat;
  height: calc(100vh - 70px);

  h1 {
    color: #fff;
  }

  .hero-body {
    display: flex;
    align-items: center;
  }
`;

export default Hero;
