import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import {Logo} from '../components';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

const Wrapper = styled.aside`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }

    .show-sidebar {
      margin-left: 0;
    }

    .content{
      position: sticky;
      top: 0;
    }
  }
`;
