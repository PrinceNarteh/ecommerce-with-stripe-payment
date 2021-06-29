import styled from "styled-components";
import { withRouter } from "react-router";
import studioBag from "../assets/studio-bag.png";

const MainSection = ({ history }) => {
  return (
    <StyledMainSection>
      <div className="inner">
        <div className="ms-image">
          <img src={studioBag} alt="" />
        </div>
        <div className="ms-description">
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            consequatur accusamus fugiat eius ab dolor maxime molestias, nisi
            aut illo eligendi incidunt obcaecati iure assumenda ea totam ad
            mollitia id?
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </StyledMainSection>
  );
};

const StyledMainSection = styled.div`
  width: 70%;
  margin: 3rem auto;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .ms-description {
    p {
      font-size: 0.933rem;
      line-height: 1.5;
      margin: 1rem 0;
    }
  }

  @media (min-width: 1024px) {
    .inner {
      display: flex;
      justify-content: center;

      .ms-image {
        max-width: 545px;
        flex: 1 0 545px;
      }

      .ms-description {
        margin-left: 30px;
        align-self: center;

        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default withRouter(MainSection);
