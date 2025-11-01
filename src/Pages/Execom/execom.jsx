import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";

function RegistrationForm({ onLoad }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    yearBatch: "",
    github: "",
    linkedIn: "",
    firstPreference: "",
    secondPreference: "",
    whyChooseRoles: "",
    uniqueSkills: "",
    contributionVision: "",
    skills: "",
    experience: "",
    projects: "",
    clubCommitments: "",
    weeklyHours: "",
    interviewMode: "",
    motivation: "",
    growthVision: "",
    initiativeExample: "",
    confirmation: false,
  });

   const [showLink, setShowLink] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwtYJ3conKnhZmrsladaUw19s_nDz18hDrR90I-tL3mlXvX2-00p_zmdToMD3Gc4Y7qzQ/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        alert("Application Submitted!");
        setShowLink(true);
        console.log(await response.text());
      } else {
        alert("There was an error submitting your application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed.");
    }
  };

  return (
    <form className="registration-form" >
      <h2>Execom Application Form</h2>

      <section>
        <h3>1. Basic Information</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <p>Date of Birth</p>
        <input
          type="date"
          name="dob"
          placeholder="Date Of Birth"
          value={formData.dob}
          onChange={handleChange}
          onBlur={(e) => e.target.blur()}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="yearBatch"
          placeholder="Year and Batch"
          value={formData.yearBatch}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="github"
          placeholder="GitHub Profile Link"
          value={formData.github}
          onChange={handleChange}
        />
        <input
          type="url"
          name="linkedIn"
          placeholder="LinkedIn Profile Link"
          value={formData.linkedIn}
          onChange={handleChange}
        />
      </section>

      <section>
        <h3>2. Preferred Role(s)</h3>
        <select
          name="firstPreference"
          value={formData.firstPreference}
          onChange={handleChange}
          required
        >
          <option value="">Select First Preference</option>
          <option value="Technical Team">Technical Team</option>
          <option value="Web Team">Web Team</option>
          <option value="Events Team">Events Team</option>
          <option value="Sponsorship and Partnership Team">
          Partnership and Collaboration Team
          </option>
          <option value="Media Team">Media Team</option>
          <option value="Community Engagement Team">
            Community Engagement Team
          </option>
          <option value="Design Team">Design Team</option>
          <option value="Documentation Team">Documentation Team</option>
        </select>

        <select
          name="secondPreference"
          value={formData.secondPreference}
          onChange={handleChange}
        >
          <option value="">Select Second Preference</option>
          <option value="Technical Team">Technical Team</option>
          <option value="Web Team">Web Team</option>
          <option value="Events Team">Events Team</option>
          <option value="Sponsorship and Partnership Team">
          Partnership and Collaboration Team
          </option>
          <option value="Media Team">Media Team</option>
          <option value="Community Engagement Team">
            Community Engagement Team
          </option>
          <option value="Design Team">Design Team</option>
          <option value="Documentation Team">Documentation Team</option>
        </select>
      </section>

      <section>
        <h3>3. Questions About Preferred Roles</h3>
        <textarea
          name="whyChooseRoles"
          placeholder="Why did you choose your preferences?"
          value={formData.whyChooseRoles}
          onChange={handleChange}
          required
        />
        <textarea
          name="uniqueSkills"
          placeholder="What unique skills do you bring?"
          value={formData.uniqueSkills}
          onChange={handleChange}
          required
        />
        <textarea
          name="contributionVision"
          placeholder="How do you envision contributing?"
          value={formData.contributionVision}
          onChange={handleChange}
          required
        />
      </section>

      <section>
        <h3>4. Skills and Experience</h3>
        <textarea
          name="skills"
          placeholder="Relevant Skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience"
          placeholder="Previous Experience (if any)"
          value={formData.experience}
          onChange={handleChange}
          required
        />
        <textarea
          name="projects"
          placeholder="Hackathons/Projects"
          value={formData.projects}
          onChange={handleChange}
          required
        />
      </section>

      <section>
        <h3>5. Availability</h3>
        <textarea
          name="clubCommitments"
          placeholder="Other club commitments?"
          value={formData.clubCommitments}
          onChange={handleChange}
          required
        />
        <h3>How Many Hours can you commit to Execom Works?</h3>
        <div>
          <label>
            <input
              type="radio"
              name="weeklyHours"
              value="1"
              onChange={handleChange}
            />
            1 hour
          </label>
          <label>
            <input
              type="radio"
              name="weeklyHours"
              value="1-3"
              onChange={handleChange}
            />
            1-3 hours
          </label>
          <label>
            <input
              type="radio"
              name="weeklyHours"
              value="3-6"
              onChange={handleChange}
            />
            3-6 hours
          </label>
          <label>
            <input
              type="radio"
              name="weeklyHours"
              value="6+"
              onChange={handleChange}
            />
            More than 6 hours
          </label>
        </div>

        <h3>6.Preferred Mode of Interview</h3>
        <select
          name="interviewMode"
          value={formData.interviewMode}
          onChange={handleChange}
          required
        >
          <option value=""> Select</option>
          <option value="In-Person">In-Person</option>
          <option value="Online">Online</option>
          <option value="Either">Either</option>
        </select>
      </section>

      <section>
        <h3>7. Motivation and Goals</h3>
        <textarea
          name="motivation"
          placeholder="What inspired you to apply for ENCIDE?"
          value={formData.motivation}
          onChange={handleChange}
          required
        />
        <textarea
          name="growthVision"
          placeholder="How do you see yourself growing personally and professionally by being a part of the Execom?"
          value={formData.growthVision}
          onChange={handleChange}
          required
        />
        <textarea
          name="initiativeExample"
          placeholder="Describe a time when you took the initiative in a group setting. What was the outcome?"
          value={formData.initiativeExample}
          onChange={handleChange}
          required
        />
      </section>

      <section>
        <h3>8. Confirmation</h3>
        <label>
          <input
            type="checkbox"
            name="confirmation"
            checked={formData.confirmation}
            onChange={handleChange}
            required
          />
          I confirm that all the information provided is accurate and truthful.
        </label>
      </section>

      <button onClick={handleSubmit}>Submit Application</button>

      {showLink && (
        <p style={{ marginTop: "20px", textAlign: "center" }}>
           Thank you for applying! <br />
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", fontWeight: "bold" }}
          >
            👉 Click here to join the WhatsApp group
          </a>
        </p>
      )}
    </form>
  );
}

export default RegistrationForm;
