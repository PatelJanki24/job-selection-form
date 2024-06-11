import React, { useState } from 'react';

const JobSelectionForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    jobType: '',
    employmentType: '',
    skill: '',
    workType: '' // Added workType
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="location">Location:</label>
        <select name="location" value={formData.location} onChange={handleChange}>
          <option value="">Select Location</option>
          <option value="Anand">Anand</option>
          <option value="Ahemedabad">Ahemedabad</option>
          <option value="Surat">Surat</option>
          <option value="Vadodra">Vadodra</option>
          <option value="Hydrabad">Hydrabbad</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="jobType">Type of Job:</label>
        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="fulltime">Full Time</option>
          <option value="contract">Contract Based</option>
          <option value="internship">Internship</option>
          <option value="parttime">Part Time</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="skill">Skill:</label>
        <select name="skill" value={formData.skill} onChange={handleChange}>
          <option value="">Select Skill</option>
          <option value="webdevelopment">Web Development</option>
          <option value="appdevelopment">App Development</option>
          <option value="machinelearning">Machine Learning</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Graphics Designer">Graphics Designer</option>
          <option value="dataanalysis">Data Analysis</option>
        </select>
      </div>

      <div>
        <label htmlFor="workType">Work Type:</label>
        <select name="workType" value={formData.workType} onChange={handleChange}>
          <option value="">Select Work Type</option>
          <option value="freelance">Freelance</option>
          <option value="hybrid">Hybrid</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
          </select>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobSelectionForm;
