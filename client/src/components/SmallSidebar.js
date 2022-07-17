import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

const SmallSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >Small Device Sidebar
        <div className='content'>Content</div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }

  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
