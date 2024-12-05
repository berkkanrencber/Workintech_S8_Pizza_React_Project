/* eslint-disable react/prop-types */
function SizeSelector({ size, onChange }) {
    return (
      <div className="form-group size-selector">
        <p>
          Boyut Seç <span className="required">*</span>
        </p>
        <div className="radio-group">
          {["S", "M", "L"].map((sizeOption) => (
            <label key={sizeOption} className="radio-option">
              <input
                type="radio"
                name="size"
                value={sizeOption}
                onChange={onChange}
                checked={size === sizeOption}
              />
              <span className="radio-label">{sizeOption}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  
  export default SizeSelector;