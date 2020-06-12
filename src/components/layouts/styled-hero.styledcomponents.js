import styled from "styled-components";
import defaultImg from "../../images/room-1.jpeg";

const StyledHero = styled.header`
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
