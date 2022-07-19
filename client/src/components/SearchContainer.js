import Wrapper from '../pages/dashboard/DashboardFormWrapper';
import { FormRow, FormRowSelect } from './index';

const SearchContainer = () => {
  return (
    <Wrapper>
      <form className='form'>
          <h3>search form</h3>
          <div className='form-center'>
            <FormRow type='text' name='search' />
          </div>
        </form>
    </Wrapper>
  )
}

export default SearchContainer