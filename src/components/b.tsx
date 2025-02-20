const ScrollToSkills = () => {
  <div>
    document.getElementById("skills-section").scrollIntoView({});
    <button onClick={ScrollToSkills}>Go to Skills</button>
    <section id="skills-section">
      <h2>Skills</h2>
    </section>
  </div>;
};
export default ScrollToSkills;
