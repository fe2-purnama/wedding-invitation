import styled from "styled-components";
import BgBenner from "../assets/gml1.png";

export const BennerStyle = styled.section`
  width: auto;
  min-height: 80vh;
  background-image: url(${BgBenner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
  padding: 0 100px;
`;

export const ButtonStyle = styled.button`
  padding: 10px 40px;
  border-radius: 0.3rem;
  background: #3887be;
  color: #ffffff;
  font-weight: 500;
  border: none;

  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #3887be;
    border-color: #3887be;
    border: 2px solid;
  }
`;

export const BennerText = styled.div`
  font-size: 3.4rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const BennerImg = styled.div`
  font-size: 3.4rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 100px;
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;

export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 1.5rem;
  margin-top: 40rem;
  padding: 0 20px;

  .box {
    padding: 20px;
    border-radius: 0.5rem;
    text-align: center;
    background: #3887be;

    p {
      font-size: 0.938rem;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0.5rem 0 0.5rem;
    }
    button {
      padding: 10px 40px;
      border-radius: 0.3rem;
      background: #fff;
      color: #3887be;
      font-weight: 500;
      border: none;

      &:hover {
        cursor: pointer;
        background: #3887be;
        color: #fff;
        border-color: black;
        border: 2px solid;
      }
    }
  }
`;

export const TestiForm = styled.div`
  width: 500px;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 10px;
  }
  button {
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #3887be;
    color: #ffffff;
    font-weight: 500;
    border: none;

    &:hover {
      cursor: pointer;
      background: #ffffff;
      color: #3887be;
      border-color: #3887be;
      border: 2px solid;
    }
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
`;
export const Section = styled.section`
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap; 
`;

export const Card = styled.div`
  flex: 1; 
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 10px 20px;
  max-width: 500px; 
  
`;

export const Image = styled.div`
width: 100%;
height: auto;
  img{
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;
export const Project = styled.h1`
  font-size: 30px;
  width: 100%;
  text-align:center;
  justify-content:center;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #666;
`;
export const Section1 = styled.section`
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap; 
`;