/* eslint-disable react/prop-types */
function UserDetail({ name, onChange }) {
    return (
      <div className="form-group name-note">
        <label htmlFor="name">
          İsim <span className="required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Adınızı giriniz"
          required
        />
      </div>
    );
  }
  
  export default UserDetail;