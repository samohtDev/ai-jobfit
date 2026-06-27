/**
 * Component: CVCard
 *
 * Displays a single CV in the user's library.
 */

function CVCard() {
  return (
    <div className="cv-card">

      <h3>Software Developer CV</h3>

      <p>
        Career: Software Development
      </p>

      <p>
        ATS Baseline: Not analyzed yet
      </p>

      <button>Download</button>

      <button>Replace</button>

      <button>Delete</button>

    </div>
  );
}

export default CVCard;