import React, { useState } from 'react';

function Page3() {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [searchTermNotes, setSearchTermNotes] = useState('');
  const [searchTermPDF, setSearchTermPDF] = useState('');
  const [searchTermVideos, setSearchTermVideos] = useState('');

  const programs = [
    'Mechanical Engineering',
    'Computer Engineering',
    'Electrical Engineering',
    'Civil Engineering',
  ];

  const notes = [
    { title: 'Chapter 1 Notes', tags: ['Introduction', 'Math'], link: '#' },
    { title: 'Chapter 2 Notes', tags: ['Physics', 'Math'], link: '#' },
  ];

  const pdfLinks = [
    { title: 'Chapter 1 Solutions', tags: ['Math'], link: '#' },
    { title: 'Chapter 2 Solutions', tags: ['Physics'], link: '#' },
  ];

  const videoLinks = [
    { title: 'Lecture 1 Video', tags: ['Introduction'], link: '#' },
    { title: 'Lecture 2 Video', tags: ['Math'], link: '#' },
  ];

  return (
    <div style={styles.container}>
      {/* Side Menu */}
      <aside style={styles.sideMenu}>
        <div style={styles.profile}>
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            style={styles.profileImage}
          />
          <span style={styles.profileName}>John Doe</span>
        </div>
        <div style={styles.programsContainer}>
          {programs.map((program, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProgram(program)}
              onMouseLeave={() => setHoveredProgram(null)}
              style={styles.programItem}
            >
              {program}
              {hoveredProgram === program && (
                <div style={styles.dropdownMenuPushDown}>
                  {[1, 2, 3, 4, 5].map((year) => (
                    <div key={year} style={styles.dropdownItem}>
                      Year {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Title */}
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>Electrical Engineering Year 1 - Programming Basics</h1>
        </div>

        {/* Links Box - PDF Links */}
        <div style={styles.box}>
          <h2>PDF Links</h2>
          <input
            type="text"
            placeholder="Search PDF links..."
            value={searchTermPDF}
            onChange={(e) => setSearchTermPDF(e.target.value)}
            style={styles.searchBar}
          />
          <div>
            {pdfLinks
              .filter((item) =>
                item.title.toLowerCase().includes(searchTermPDF.toLowerCase()) ||
                item.tags.some((tag) =>
                  tag.toLowerCase().includes(searchTermPDF.toLowerCase())
                )
              )
              .map((item, index) => (
                <div key={index} style={styles.linkItem}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <div style={styles.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Notes Box */}
        <div style={styles.box}>
          <h2>Notes</h2>
          <input
            type="text"
            placeholder="Search Notes..."
            value={searchTermNotes}
            onChange={(e) => setSearchTermNotes(e.target.value)}
            style={styles.searchBar}
          />
          <div>
            {notes
              .filter((item) =>
                item.title.toLowerCase().includes(searchTermNotes.toLowerCase()) ||
                item.tags.some((tag) =>
                  tag.toLowerCase().includes(searchTermNotes.toLowerCase())
                )
              )
              .map((item, index) => (
                <div key={index} style={styles.linkItem}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <div style={styles.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Videos Box */}
        <div style={styles.box}>
          <h2>Videos</h2>
          <input
            type="text"
            placeholder="Search Videos..."
            value={searchTermVideos}
            onChange={(e) => setSearchTermVideos(e.target.value)}
            style={styles.searchBar}
          />
          <div>
            {videoLinks
              .filter((item) =>
                item.title.toLowerCase().includes(searchTermVideos.toLowerCase()) ||
                item.tags.some((tag) =>
                  tag.toLowerCase().includes(searchTermVideos.toLowerCase())
                )
              )
              .map((item, index) => (
                <div key={index} style={styles.linkItem}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <div style={styles.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sideMenu: {
    width: '25%',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileName: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  programsContainer: {
    width: '100%',
  },
  programItem: {
    position: 'relative',
    padding: '10px',
    backgroundColor: '#34495e',
    marginBottom: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  dropdownMenuPushDown: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#1abc9c',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '10px',
  },
  dropdownItem: {
    padding: '10px',
    borderBottom: '1px solid #16a085',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start', // Align title to the left
  },
  title: {
    fontSize: '1.5em',  // Adjust font size for better fit
    fontWeight: 'bold',
    marginBottom: '8px', // Reduced margin
  },
  box: {
    padding: '20px',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  searchBar: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  linkItem: {
    marginBottom: '15px',
  },
  tags: {
    marginTop: '5px',
  },
  tag: {
    backgroundColor: '#16a085',
    color: '#fff',
    padding: '5px 10px',
    marginRight: '5px',
    borderRadius: '5px',
  },
};

export default Page3;
