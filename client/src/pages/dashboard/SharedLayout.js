import { Outlet, Link } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <section>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all job</Link>
      </nav>
      <Outlet />
    </section>
  );
};

export default SharedLayout;
