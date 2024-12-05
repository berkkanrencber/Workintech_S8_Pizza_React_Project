/* eslint-disable react/prop-types */
function CrustSelector({ crust, onChange }) {
    return (
      <div className="form-group crust-selector">
        <p>
          Hamur Seç <span className="required">*</span>
        </p>
        <div className="select-wrapper">
          <select
            id="crust"
            name="crust"
            value={crust}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              --Hamur Kalınlığı Seç--
            </option>
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default CrustSelector;