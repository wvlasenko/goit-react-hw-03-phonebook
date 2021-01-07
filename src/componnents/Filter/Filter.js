import PropTypes from 'prop-types';
import FilterStl from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
    return (
        <div className={FilterStl.filterContainer}>
            <label className={FilterStl.label}>
                Find contact by name:
                <input
                    type="text"
                    value={filter}
                    onChange={onChangeFilter}
                    name="filter"
                    className={FilterStl.input}
                />
            </label>
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
