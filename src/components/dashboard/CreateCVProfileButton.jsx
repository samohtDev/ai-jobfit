/**
 * Component: CreateCVProfileButton
 *
 * Displays the button used to add a new CV
 * to the user's CV library.
 */

function CreateCVProfileButton({ onClick }) {
  return (
    <button
      className="primary-btn"
      onClick={onClick}>
      + Create CV Profile
    </button>
  );
}

export default CreateCVProfileButton;