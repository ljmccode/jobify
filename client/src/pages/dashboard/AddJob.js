import Wrapper from './DashboardFormWrapper';
import { useAppContext } from '../../context/appContext';
import { FormRow, Alert } from '../../components';

const AddJob = () => {
  const {
    displayAlert,
    isEditing,
    showAlert,
    position,
    company,
    jobLocation,
    status,
    jobType,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log('submitted');
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <div className='btn-container'>
            <button className='btn btn-block submit-btn' onClick={handleSubmit}>
              submit
            </button>
            <button className='btn btn-block clear-btn'>clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
