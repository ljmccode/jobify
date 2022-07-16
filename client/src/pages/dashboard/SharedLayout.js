import { Outlet } from 'react-router-dom';
import { Navbar, BigSidebar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <section>
      <div>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SharedLayout;
