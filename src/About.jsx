function About() {
  return <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1>About This Website</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto",border: "2px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <p>
        This is a simple React project demonstrating the concept of routing
        using <strong>React Router</strong>. It contains a navigation bar that
        allows you to switch between different pages — Home, About, and Contact —
        without reloading the browser.
      </p>
      <p>
        The goal of this example is to show how React Router can be used to
        create a smooth, single-page application (SPA) experience where page
        changes happen instantly.
      </p>
      <p>
        This project is perfect for beginners who want to learn the basics of
        navigation in React and how components can be linked together.
      </p>
      </div>
    </div>
}
export default About;
