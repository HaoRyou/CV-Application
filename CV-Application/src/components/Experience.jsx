import '../styles/Experience.css';
import exper from '../assets/domain.svg';

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <img src={exper} width={50} height={50} />
        <div>
          <h2>Experience</h2>
          <p>Add your work experience</p>
        </div>
      </div>

      <div className="form-group">
        <label>Company Name:</label>
        <input type="text" name="Name" placeholder="Google" />
      </div>

      <div className="form-group">
        <label>Position Title:</label>
        <input type="text" name="Position" placeholder="Project Manager" />
      </div>

      <div className="date-grid">
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" />
        </div>
      </div>

      <div className="form-group">
        <label>Location</label>
        <input type="text" placeholder="City, State" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          rows="4"
          placeholder="Describe your responsibilities and achievements"
        ></textarea>
      </div>

      <button className="experience-button">Add Experience</button>
    </div>
  );
}
