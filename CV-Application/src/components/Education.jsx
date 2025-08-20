import '../styles/Education.css';
import educate from '../assets/school.svg';

function Education() {
  return (
    <div className="education-container">
      <div className="education-header">
        <img src={educate} width="50" height="50" />
        <div>
          <h2>Education</h2>
          <p>Add your educational background</p>
        </div>
      </div>

      <div className="form-section">
        <h3>Education</h3>

        <div className="form-group">
          <label>Institution</label>
          <input type="text" placeholder="Queens College" />
        </div>

        <div className="form-group">
          <label>Degree/Certificate</label>
          <input
            type="text"
            placeholder="Bachelor of Art in Computer Science"
          />
        </div>

        <div className="date-grid">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" placeholder="--/--/----" />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" placeholder="--/--/----" />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="3"
            placeholder="Relevant coursework, achievements, GPA"
          ></textarea>
        </div>

        <button className="education-button">Add Education</button>
      </div>
    </div>
  );
}

export default Education;
