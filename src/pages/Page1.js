import React, { useState } from 'react';

function Page1() {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoritedCourses, setFavoritedCourses] = useState([]);

  const programs = [
    'Mechanical Engineering',
    'Computer Engineering',
    'Electrical Engineering',
    'Civil Engineering',
  ];

  const courses = ['Math 101', 'Physics 201', 'Programming Basics', 'Thermodynamics'];

  const toggleFavoriteCourse = (course) => {
    setFavoritedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const handleCourseClick = () => {
    window.location.href = 'https://google.com'; // Navigate to Google on box click
  };

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
        <div style={styles.authButtonsContainer}>
          <button style={styles.createAccountButton}>Create Account</button>
          <button style={styles.signInButton}>Sign In</button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Courses Section */}
        <div style={styles.box}>
          <h2>Courses</h2>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchBar}
          />
          <div style={styles.grid}>
            {courses
              .filter((course) =>
                course.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((course, index) => (
                <div
                  key={index}
                  style={styles.gridItem}
                  onClick={() => handleCourseClick(course)} // Box click goes to Google
                >
                  {course}
                  <span
                    style={{
                      ...styles.starIcon,
                      color: favoritedCourses.includes(course) ? '#ffd700' : '#fff',
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the box click event from triggering
                      toggleFavoriteCourse(course);
                    }}
                  >
                    ★
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Favorited Courses Section */}
        <div style={styles.box}>
          <h2>Favorited Courses</h2>
          {favoritedCourses.length > 0 ? (
            <div style={styles.favoritedGrid}>
              {favoritedCourses.map((course, index) => (
                <div
                  key={index}
                  style={styles.favoritedCourseBox}
                  onClick={handleCourseClick} // Clicking favorited course also sends you to Google
                >
                  {course}
                </div>
              ))}
            </div>
          ) : (
            <p>No courses favorited yet.</p>
          )}
        </div>

        {/* Information Section */}
        <div style={styles.box}>
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel velit auctor, auctor ligula vitae, vehicula lorem.
          </p>
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
  authButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 'auto',
  },
  createAccountButton: {
    flex: 1,
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  signInButton: {
    flex: 1,
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  gridItem: {
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: '#3498db', // Default color for non-selected course
  },
  starIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
    cursor: 'pointer',
  },
  favoritedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  favoritedCourseBox: {
    padding: '10px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer', // Enable clicking on the favorited course box
  },
};

export default Page1;
