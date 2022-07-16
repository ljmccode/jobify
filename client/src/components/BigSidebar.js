import styled from "styled-components";

const BigSidebar = () => {
  return (
    <Wrapper>
      <h4>BigSidebar</h4>
    </Wrapper>
  )
}

export default BigSidebar

const Wrapper = styled.aside`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;