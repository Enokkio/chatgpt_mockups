function Page2() {
    const courses = [
      { name: 'Circuit Analysis', code: 'EE101' },
      { name: 'Introduction to Programming', code: 'EE102' },
      { name: 'Mathematics for Engineers', code: 'EE103' },
      { name: 'Digital Logic Design', code: 'EE104' },
      { name: 'Electromagnetics', code: 'EE105' },
      { name: 'Signals and Systems', code: 'EE106' },
    ];
  
    const handleCourseClick = () => {
      window.location.href = 'https://google.com';
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
            {['Mechanical Engineering', 'Computer Engineering', 'Electrical Engineering', 'Civil Engineering'].map((program, index) => (
              <div key={index} style={styles.programItem}>
                {program}
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
          <div style={styles.box}>
            <h2>Electrical Engineering Year 1</h2>
            <div style={styles.grid}>
              {courses.map((course, index) => (
                <div
                  key={index}
                  style={styles.courseBox}
                  onClick={handleCourseClick}
                >
                  <span style={styles.starIcon}>⭐</span>
                  <h3>{course.name}</h3>
                  <p>{course.code}</p>
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
      height: '100vh',
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
      flex: 1, // Allow the programs container to grow
      display: 'flex',
      flexDirection: 'column',
    },
    programItem: {
      padding: '10px',
      backgroundColor: '#34495e',
      marginBottom: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
      textAlign: 'center',
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
      display: 'flex',
      flexDirection: 'column',
    },
    box: {
      padding: '20px',
      backgroundColor: '#ecf0f1',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '20px',
    },
    courseBox: {
      padding: '20px',
      backgroundColor: '#3498db',
      color: '#fff',
      borderRadius: '10px',
      cursor: 'pointer',
      textAlign: 'center',
      height: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    starIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '1.5em',
      cursor: 'pointer',
    },
  };
  
  export default Page2;
  