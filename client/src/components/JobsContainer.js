import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import styled from 'styled-components';

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (totalJobs === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>;
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{totalJobs > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;

const Wrapper = styled.section`
margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }

.jobs {
  display: grid;
  gap: 2rem;
}

@media (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
