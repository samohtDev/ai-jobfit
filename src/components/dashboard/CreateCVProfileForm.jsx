/**
 * File: CreateCVProfileForm.jsx
 *
 * Responsibility:
 * Displays the form used to collect information
 * for a new CV Profile.
 *
 * Called By:
 * CreateCVProfileModal.jsx
 *
 * Does NOT:
 * - Save data
 * - Upload files
 * - Connect to Firebase
 */

import { useState } from "react";
import { CAREER_CATEGORIES } from "../../constants/careerCategories";
import "../../styles/createCVProfileForm.css";
import { createCVProfile } from "../../services/cvProfileService";

function CreateCVProfileForm({
    onClose,
    onProfileCreated,
}) {
    /**
 * Form State
 *
 * Stores everything the user enters while
 * creating a CV Profile.
 *
 * Why one object?
 *
 * These values belong together because they
 * all describe one CV Profile.
 */

const [formData, setFormData] = useState({
  profileName: "",
  targetCareer: "",
  description: "",
  originalCV: null,
});

/*
  * Validation Errors
  *
  * Stores any validation messages
  * that should be shown to the user.
  *
  * Example:
  * 
  *   profileName: "Profile name is required."
  * 
  */
const [errors, setErrors] = useState({});


/**
 * Function: handleInputChange
 *
 * Purpose:
 * Updates any text, textarea or select field
 * in the form.
 *
 * Triggered By:
 * - Profile Name input
 * - Target Career select
 * - Description textarea
 *
 * Why?
 * Instead of creating one function for every field,
 * we reuse one function for all of them.
 

const handleInputChange = (event) => {
  const { name, value } = event.target;

  setFormData((previousData) => ({
    ...previousData,
    [name]: value,
  }));
};*/

const handleInputChange = (event) => {

    const { name, value } = event.target;

    setFormData((previousData) => ({
        ...previousData,
        [name]: value,
    }));

    setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
    }));
};


/**
 * Function: handleFileChange
 *
 * Purpose:
 * Stores the CV file selected by the user.
 *
 * Triggered By:
 * The Original CV file input.
 *
 * Why?
 * File inputs work differently from text inputs.
 * They provide a File object instead of a text value.
 */

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];

  setFormData((previousData) => ({
    ...previousData,
    originalCV: selectedFile,
  }));

  setErrors((previousErrors) => ({
    ...previousErrors,
    originalCV: "",
  }));

};


/**
 * Function: validateForm
 *
 * Purpose:
 * Checks whether all required
 * information has been entered.
 *
 * Returns:
 * true  -> Form is valid.
 * false -> Validation failed.
 */

const validateForm = () => {

    const validationErrors = {};

    if (!formData.profileName.trim()) {
        validationErrors.profileName =
            "Please enter a profile name.";
    }

    if (!formData.targetCareer) {
        validationErrors.targetCareer =
            "Please select a target career.";
    }

    if (!formData.originalCV) {
        validationErrors.originalCV =
            "Please upload your CV.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;

};


/**
 * ==========================================================
 * Function: createCVProfileObject
 * ==========================================================
 *
 * Purpose:
 * Converts the form data into a standardized
 * CV Profile object that can be stored
 * in the database.
 *
 * Called By:
 * handleCreateProfile()
 *
 * Reads:
 * formData
 *
 * Returns:
 * A complete CV Profile object.
 *
 * Why Separate?
 * Keeps database structure independent
 * from the UI.
 * ==========================================================
 */

const createCVProfileObject = () => {

    return {

        profileName: formData.profileName.trim(),

        targetCareer: formData.targetCareer,

        description: formData.description.trim(),

        originalFileName: formData.originalCV.name,

    };

};

/**
 * Function: handleCreateProfile
 *
 * Purpose:
 * Runs when the user submits the Create CV Profile form.
 *
 * Responsibilities:
 * 1. Prevent the browser from refreshing.
 * 2. Validate the form.
 * 3. Stop if validation fails.
 * 4. Continue if validation succeeds.
 *
 * NOTE:
 * Saving to Firebase will be added in the next sprint.
 */

const handleCreateProfile = async (event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  const profile = createCVProfileObject();

  const savedProfile = await createCVProfile(profile);;

  /**
   * Notify the parent component
   * that a new profile has been created.
   */
  onProfileCreated(savedProfile);

  /**
   * Close the modal after a successful save.
   */
  onClose();
};


  return (
    <form
      className="cv-form"
      onSubmit={handleCreateProfile}>

      <h3 className="section-title">Profile Information</h3>

      <label className="form-label">Profile Name *</label>

      <input
        className="form-input"
        type="text"
        name="profileName"
        placeholder="e.g. Software Developer CV"
        value={formData.profileName}
        onChange={handleInputChange}
      />
          {
            errors.profileName && (
                <p className="error-message">
                    {errors.profileName}
                </p>
            )
          }


      <label className="form-label">Target Career *</label>

      <select
        className="form-select"
        name="targetCareer"
        value={formData.targetCareer}
        onChange={handleInputChange}>

        <option value="">
          Select a career
        </option>

        // .map() converts an array into React elements.
        {CAREER_CATEGORIES.map((career) => (
          <option
            key={career}
            value={career}
          >
            {career}
          </option>
        ))}
      </select>
          {
            errors.targetCareer && (
                <p className="error-message">
                    {errors.targetCareer}
                </p>
            )
          }

      <label className="form-label">Description (Optional)</label>

      <textarea
        className="form-textarea"
        name="description"
        rows="4"
        placeholder="Brief description..."
        value={formData.description}
        onChange={handleInputChange}
      />

      <h3 className="section-title">Original CV</h3>

      <input
        className="form-file"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
          {
            errors.originalCV && (
                <p className="error-message">
                    {errors.originalCV}
                </p>
            )
          }
          {
            formData.originalCV && (
              <p className="selected-file">
                Selected File: {formData.originalCV.name}
              </p>
            )
          }
      

      <div className="form-actions">
          <button type="submit">

              Create Profile

          </button>
      </div>

    </form>
    
  );
  
}

export default CreateCVProfileForm;