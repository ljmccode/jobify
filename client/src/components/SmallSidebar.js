import styled from 'styled-components';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <h4>SmallSidebar</h4>
    </Wrapper>
  );
};

export default SmallSidebar;

const Wrapper = styled.aside`
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
