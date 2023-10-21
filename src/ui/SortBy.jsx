import PropTypes from 'prop-types'; // Import PropTypes
import Select from "./Select";
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
    const [searchParams,setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy')||"";

    function handleChange(e){
        searchParams.set('sortBy',e.target.value);
        setSearchParams(searchParams);
    }
  return <Select options={options} type="white" value={sortBy} onChange={handleChange} />;
}

SortBy.propTypes = {
  options: PropTypes.array.isRequired, // Define PropTypes for the 'options' prop
};

export default SortBy;
