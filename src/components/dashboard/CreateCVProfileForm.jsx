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

function CreateCVProfileForm() {
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

  return (
    <form>

        <h3>Profile Information</h3>

        <label>Profile Name *</label>

        <input
            type="text"
            placeholder="e.g. Software Developer CV"
            value={formData.profileName}
                onChange={(event) =>
                    setFormData({
                    ...formData,
                    profileName: event.target.value,
                    })
                }
        />

        <label>Target Career *</label>

        <select>
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

      <label>Description (Optional)</label>

      <textarea
        rows="4"
        placeholder="Brief description..."
      />

      <h3>Original CV</h3>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
      />

    </form>
  );
}

export default CreateCVProfileForm;