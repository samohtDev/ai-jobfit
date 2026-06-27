/**
 * Component: CVLibrary
 *
 * Displays all CVs stored by the user.
 */

import EmptyState from "./EmptyState";
// import CVCard from "./CVCard";

function CVLibrary() {

  const hasCVs = false;

  return (
    <section>

      <h2>My CV Library</h2>

      {
        hasCVs
          ? (
            <p>CV cards will appear here.</p>
          )
          : (
            <EmptyState />
          )
      }

    </section>
  );
}

export default CVLibrary;