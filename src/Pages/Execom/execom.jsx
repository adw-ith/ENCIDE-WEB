import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    yearBatch: '',
    github: '',
    linkedIn: '',
    firstPreference: '',
    secondPreference: '',
    whyChooseRoles: '',
    uniqueSkills: '',
    contributionVision: '',
    skills: '',
    experience: '',
    projects: '',
    clubCommitments: '',
    weeklyHours: '',
    interviewMode: '',
    motivation: '',
    growthVision: '',
    initiativeExample: '',
    confirmation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Application Submitted!');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Execom Application Form</h2>

      <section>
        <h3>1. Basic Information</h3>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="date"  name="dob"  value={formData.dob} onChange={handleChange} onBlur={(e) => e.target.blur()} 
        required 
        />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="yearBatch" placeholder="Year and Batch" value={formData.yearBatch} onChange={handleChange} required />
        <input type="url" name="github" placeholder="GitHub Profile Link" value={formData.github} onChange={handleChange} />
        <input type="url" name="linkedIn" placeholder="LinkedIn Profile Link" value={formData.linkedIn} onChange={handleChange} />
      </section>

      <section>
        <h3>2. Preferred Role(s)</h3>
        <select name="firstPreference" value={formData.firstPreference} onChange={handleChange} required>
            <option value="">Select First Preference</option>
            <option value="Technical Team">Technical Team</option>
            <option value="Web Team">Web Team</option>
            <option value="Events Team">Events Team</option>
            <option value="Sponsorship and Partnership Team">Sponsorship and Partnership Team</option>
            <option value="Media Team">Media Team</option>
            <option value="Community Engagement Team">Community Engagement Team</option>
            <option value="Design Team">Design Team</option>
            <option value="Documentation Team">Documentation Team</option>
        </select>

        <select name="secondPreference" value={formData.secondPreference} onChange={handleChange}>
            <option value="">Select Second Preference</option>
            <option value="Technical Team">Technical Team</option>
            <option value="Web Team">Web Team</option>
            <option value="Events Team">Events Team</option>
            <option value="Sponsorship and Partnership Team">Sponsorship and Partnership Team</option>
            <option value="Media Team">Media Team</option>
            <option value="Community Engagement Team">Community Engagement Team</option>
            <option value="Design Team">Design Team</option>
            <option value="Documentation Team">Documentation Team</option>
        </select>

      </section>

      <section>
        <h3>3. Questions About Preferred Roles</h3>
        <textarea name="whyChooseRoles" placeholder="Why did you choose your preferences?" value={formData.whyChooseRoles} onChange={handleChange} />
        <textarea name="uniqueSkills" placeholder="What unique skills do you bring?" value={formData.uniqueSkills} onChange={handleChange} />
        <textarea name="contributionVision" placeholder="How do you envision contributing?" value={formData.contributionVision} onChange={handleChange} />
      </section>

      <section>
        <h3>4. Skills and Experience</h3>
        <textarea name="skills" placeholder="Relevant Skills" value={formData.skills} onChange={handleChange} />
        <textarea name="experience" placeholder="Previous Experience (if any)" value={formData.experience} onChange={handleChange} />
        <textarea name="projects" placeholder="Hackathons/Projects" value={formData.projects} onChange={handleChange} />
      </section>

      <section>
        <h3>5. Availability</h3>
        <textarea name="clubCommitments" placeholder="Other club commitments?" value={formData.clubCommitments} onChange={handleChange} />
        <div>
          <label>
            <input type="radio" name="weeklyHours" value="1" onChange={handleChange} />
            1 hour
          </label>
          <label>
            <input type="radio" name="weeklyHours" value="1-3" onChange={handleChange} />
            1-3 hours
          </label>
          <label>
            <input type="radio" name="weeklyHours" value="3-6" onChange={handleChange} />
            3-6 hours
          </label>
          <label>
            <input type="radio" name="weeklyHours" value="6+" onChange={handleChange} />
            More than 6 hours
          </label>
        </div>
        
        <h3>6.Preferred Mode of Interview</h3>
        <select name="interviewMode" value={formData.interviewMode} onChange={handleChange} required>
          <option value=""> Select</option>
          <option value="In-Person">In-Person</option>
          <option value="Online">Online</option>
          <option value="Either">Either</option>
        </select>
      </section>

      <section>
        <h3>6. Motivation and Goals</h3>
        <textarea name="motivation" placeholder="What inspired you to apply?" value={formData.motivation} onChange={handleChange} />
        <textarea name="growthVision" placeholder="How do you see yourself growing?" value={formData.growthVision} onChange={handleChange} />
        <textarea name="initiativeExample" placeholder="Describe a time you took initiative" value={formData.initiativeExample} onChange={handleChange} />
      </section>

      <section>
        <h3>8. Confirmation</h3>
        <label>
          <input type="checkbox" name="confirmation" checked={formData.confirmation} onChange={handleChange} required />
          I confirm that all the information provided is accurate and truthful.
        </label>
      </section>

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default RegistrationForm;
