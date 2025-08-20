import { useState } from 'react';
import '../styles/Experience.css';
import exper from '../assets/domain.svg';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  // Add new empty experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: '',
        position: '',
        start: '',
        end: '',
        location: '',
        description: '',
      },
    ]);
  };

  // Remove experience by index
  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  // Handle field updates
  const handleChange = (index, field, value) => {
    const updated = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
  };

  return (
    <div className="experience-container">
      {/* Section Header */}
      <div className="experience-header">
        <img src={exper} width={50} height={50} />
        <div>
          <h2>Experience</h2>
          <p>Add your work experience</p>
        </div>
      </div>

      {/* Dynamic Experiences */}
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h2>Experience {index + 1}</h2>

          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              placeholder="Google"
            />
          </div>

          <div className="form-group">
            <label>Position Title:</label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleChange(index, 'position', e.target.value)}
              placeholder="Project Manager"
            />
          </div>

          <div className="date-grid">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={exp.start}
                onChange={(e) => handleChange(index, 'start', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={exp.end}
                onChange={(e) => handleChange(index, 'end', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) => handleChange(index, 'location', e.target.value)}
              placeholder="City, State"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="3"
              value={exp.description}
              onChange={(e) =>
                handleChange(index, 'description', e.target.value)
              }
              placeholder="Describe your responsibilities and achievements"
            ></textarea>
          </div>

          <button
            className="delete-button"
            onClick={() => removeExperience(index)}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Add Experience */}
      <button className="experience-button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
}
