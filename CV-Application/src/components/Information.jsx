import '../styles/Information.css';
import person from '../assets/card-account-details-outline.svg';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import location from '../assets/location.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function Information() {
  return (
    <div className="information-container">
      <div className="information-header">
        <img src={person} height={50} width={50} />
        <div>
          <h2>Personal Information</h2>
          <p>Fill in your Basic contact detail</p>
        </div>
      </div>

      <div className="form-group">
        <label>
          Full Name
          <span class="text-red-500">*</span>
        </label>
        <div className="input-wrapper">
          <div>
            <img src={person} />
          </div>
          <input type="text" name="Name" placeholder="Kevin Jin" required />
        </div>
      </div>

      <div className="form-group">
        <label>
          Email Address
          <span class="text-red-500">*</span>
        </label>
        <div className="input-wrapper">
          <div>
            <img src={email} />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="kevin.jin@testing.com"
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-wrapper">
            <div>
              <img src={phone} />
            </div>
            <input
              type="text"
              name="PhoneNumber"
              placeholder="+1 (666) 985-941"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Location</label>
          <div className="input-wrapper">
            <div>
              <img src={location} />
            </div>
            <input
              type="text"
              name="Location"
              placeholder="City, State, Country"
            />
          </div>
        </div>
        <div className="form-group">
          <label>LinkedIn Profile</label>{' '}
          <div className="input-wrapper">
            <div>
              <img src={linkedin} />
            </div>

            <input type="text" placeholder="https://linkdin.com/in/username" />
          </div>
        </div>
        <div className="form-group">
          <label>GitHub Profile</label>{' '}
          <div className="input-wrapper">
            <div>
              <img src={github} />
            </div>

            <input type="text" placeholder="https://github.com/username" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
