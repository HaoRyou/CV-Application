import { useState } from 'react';
import '../styles/Education.css';
import educate from '../assets/school.svg';

function Education() {
  const [education, setEducation] = useState([]);

  const addEducation = () => {
    setEducation([
      ...education,
      { institution: '', degree: '', start: '', end: '', description: '' },
    ]);
  };

  const removeEducation = (index) => {
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updated);
  };

  return (
    <div className="education-container">
      <div className="education-header">
        <img src={educate} width="50" height="50" />
        <div>
          <h2>Education</h2>
          <p>Add your educational background</p>
        </div>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="experience-card">
          <h2>Education {index + 1}</h2>

          <div className="form-group">
            <label>Institution</label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) =>
                handleChange(index, 'institution', e.target.value)
              }
              placeholder="Queens College"
            />
          </div>

          <div className="form-group">
            <label>Degree/Certificate</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              placeholder="Bachelor of Arts in Computer Science"
            />
          </div>

          <div className="date-grid">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={edu.start}
                onChange={(e) => handleChange(index, 'start', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={edu.end}
                onChange={(e) => handleChange(index, 'end', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="3"
              value={edu.description}
              onChange={(e) =>
                handleChange(index, 'description', e.target.value)
              }
              placeholder="Relevant coursework, achievements, GPA"
            ></textarea>
          </div>

          <button
            className="delete-button"
            onClick={() => removeEducation(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <button className="education-button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default Education;
