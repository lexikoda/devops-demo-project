
import { useState } from "react";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [hovered, setHovered] = useState("");

  const styles = {
    app: {
      width: "100%",
      minHeight: "100vh",
      background:
        "radial-gradient(ellipse at 80% 10%, #152c4a 0%, transparent 40%), radial-gradient(ellipse at 10% 50%, #123c2c22, transparent 35%), #080d18",
      color: "#f4f7fb",
      fontFamily: "Inter, Arial, sans-serif",
      overflow: "hidden",
    },

    navbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "22px 7%",
      borderBottom: "1px solid #ffffff12",
      flexWrap: "wrap",
      gap: "16px",
    },

    logo: {
      fontSize: "25px",
      fontWeight: "800",
      letterSpacing: "-1px",
    },

    green: { color: "#8bf5b1" },

    badge: {
      border: "1px solid #ffffff20",
      borderRadius: "30px",
      padding: "10px 16px",
      fontSize: "12px",
      color: "#b9c6d8",
      background: "#ffffff08",
    },

    hero: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
      alignItems: "center",
      gap: "55px",
      padding: "90px 7%",
    },

    content: {
      minWidth: 0,
      maxWidth: "680px",
    },

    eyebrow: {
      color: "#8bf5b1",
      fontSize: "11px",
      letterSpacing: "3px",
      fontWeight: "700",
      marginBottom: "25px",
    },

    heading: {
      fontSize: "clamp(44px, 6vw, 76px)",
      lineHeight: "1.08",
      letterSpacing: "-3px",
      margin: "0",
      fontWeight: "800",
      overflowWrap: "anywhere",
    },

    gradient: {
      background: "linear-gradient(90deg, #8bf5b1, #5eafff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subheading: {
      fontSize: "clamp(22px, 3vw, 30px)",
      color: "#d8e0ec",
      marginTop: "25px",
    },

    paragraph: {
      color: "#91a0b6",
      fontSize: "15px",
      lineHeight: "1.9",
      maxWidth: "500px",
    },

    buttons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "30px",
    },

    primaryButton: {
      padding: "15px 22px",
      background: "linear-gradient(100deg, #8bf5b1, #6adba7)",
      color: "#08120d",
      border: "none",
      borderRadius: "9px",
      fontWeight: "700",
      cursor: "pointer",
      fontSize: "13px",
      transition: "all 0.25s ease",
    },

    secondaryButton: {
      padding: "14px 22px",
      background: "#ffffff08",
      color: "#d3ddeb",
      border: "1px solid #ffffff25",
      borderRadius: "9px",
      fontSize: "13px",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    stats: {
      display: "flex",
      gap: "35px",
      flexWrap: "wrap",
      marginTop: "45px",
    },

    statNumber: {
      display: "block",
      fontSize: "25px",
      fontWeight: "800",
    },

    statLabel: {
      display: "block",
      color: "#8290a5",
      fontSize: "12px",
      marginTop: "7px",
    },

    visual: {
      width: "100%",
      minWidth: 0,
      maxWidth: "620px",
      margin: "0 auto",
    },

    terminal: {
      width: "100%",
      background: "#0d1523",
      border: "1px solid #ffffff20",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 25px 80px #00000060",
    },

    terminalHeader: {
      background: "#141e2e",
      padding: "17px",
      color: "#8797ae",
      fontSize: "12px",
      borderBottom: "1px solid #ffffff10",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap",
    },

    terminalBody: {
      padding: "clamp(14px, 2.5vw, 25px)",
      fontFamily: "monospace",
      fontSize: "clamp(10px, 1.1vw, 12px)",
      lineHeight: "2",
      overflowWrap: "anywhere",
    },

    command: { color: "#7eb7ff" },
    success: { color: "#78e6a0" },

    floatingCard: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      background: "#131e2e",
      border: "1px solid #ffffff20",
      borderRadius: "12px",
      padding: "16px",
      marginTop: "15px",
    },

    section: {
      width: "100%",
      padding: "75px 7%",
      borderTop: "1px solid #ffffff12",
      background: "linear-gradient(180deg, #0c1220, #080d18)",
    },

    sectionTitle: {
      textAlign: "center",
      marginBottom: "45px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
      gap: "18px",
      width: "100%",
      margin: "0 auto",
    },

    card: {
      minWidth: 0,
      background: "#ffffff05",
      border: "1px solid #ffffff15",
      borderRadius: "14px",
      padding: "25px",
      transition: "all 0.25s ease",
    },

    cardNumber: {
      color: "#8bf5b1",
      fontFamily: "monospace",
      fontSize: "12px",
    },

    cardDescription: {
      color: "#91a0b6",
      fontSize: "13px",
      lineHeight: "1.8",
    },

    footer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
      padding: "30px 7%",
      color: "#8290a5",
      fontSize: "12px",
      borderTop: "1px solid #ffffff12",
    },
  };

  const skills = [
    {
      number: "01",
      title: "Linux & Git",
      description:
        "Master the command line, Linux administration, and version control.",
      icon: "⌘",
    },
    {
      number: "02",
      title: "Docker",
      description:
        "Package applications into containers and manage environments.",
      icon: "▣",
    },
    {
      number: "03",
      title: "Kubernetes",
      description:
        "Orchestrate containers and scale applications reliably.",
      icon: "◈",
    },
    {
      number: "04",
      title: "CI/CD & Cloud",
      description:
        "Automate software delivery and deploy modern applications.",
      icon: "☁",
    },
  ];

  return (
    <main style={styles.app}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.green}>S</span>yntacBridge
          <span style={{ color: "#5eafff" }}>.</span>
        </div>

        <div style={styles.badge}>
          <span style={styles.green}>● </span>
          DevOps Training Academy
        </div>
      </nav>

      {/* Hero section */}
      <section style={styles.hero}>
        <div style={styles.content}>
          <div style={styles.eyebrow}>
            ✦ BUILD · AUTOMATE · DEPLOY
          </div>

          <h1 style={styles.heading}>
            Welcome to
            <br />
            <span style={styles.gradient}>SyntacBridge</span>
          </h1>

          <h2 style={styles.subheading}>
            Master the art of{" "}
            <span style={styles.green}>DevOps.</span>
          </h2>

          <p style={styles.paragraph}>
            Bridge the gap between development and operations.
            Learn industry tools, automate workflows, and build
            the skills to deploy, scale, and manage modern
            applications with confidence.
          </p>

          <div style={styles.buttons}>
            <button
              style={{
                ...styles.primaryButton,
                transform:
                  hovered === "explore"
                    ? "translateY(-3px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === "explore"
                    ? "0 10px 30px #8bf5b133"
                    : "none",
              }}
              onMouseEnter={() => setHovered("explore")}
              onMouseLeave={() => setHovered("")}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Training" : "Explore Training"} ↗
            </button>

            <button
              style={{
                ...styles.secondaryButton,
                borderColor:
                  hovered === "curriculum"
                    ? "#8bf5b1"
                    : "#ffffff25",
                color:
                  hovered === "curriculum"
                    ? "#8bf5b1"
                    : "#d3ddeb",
              }}
              onMouseEnter={() => setHovered("curriculum")}
              onMouseLeave={() => setHovered("")}
              onClick={() =>
                document
                  .getElementById("curriculum")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Curriculum
            </button>
          </div>

          {showDetails && (
            <div
              style={{
                ...styles.floatingCard,
                borderColor: "#8bf5b155",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "25px" }}>🚀</span>

              <div style={{ flex: 1 }}>
                <strong>
                  Your DevOps journey starts here.
                </strong>

                <p style={styles.cardDescription}>
                  Explore Linux, Git, Docker, Kubernetes,
                  CI/CD, cloud infrastructure, and monitoring.
                </p>
              </div>
            </div>
          )}

          {/* Learning milestones */}
          <div style={styles.stats}>
            {[
              ["01", "Learn"],
              ["02", "Build"],
              ["03", "Deploy"],
            ].map(([number, label]) => (
              <div key={number}>
                <strong style={styles.statNumber}>{number}</strong>
                <span style={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal illustration */}
        <div style={styles.visual}>
          <div style={styles.terminal}>
            <div style={styles.terminalHeader}>
              <span>
                <span style={{ color: "#fa7777" }}>●</span>{" "}
                <span style={{ color: "#f6c96b" }}>●</span>{" "}
                <span style={{ color: "#6ee7a1" }}>●</span>
              </span>

              <span>syntacbridge ~ terminal</span>
              <span>•••</span>
            </div>

            <div style={styles.terminalBody}>
              <p>
                <span style={styles.green}>➜</span>{" "}
                <span style={styles.command}>git commit</span>{" "}
                -m "future-ready"
              </p>

              <p style={styles.success}>
                ✓ Changes committed successfully
              </p>

              <p>
                <span style={styles.green}>➜</span>{" "}
                <span style={styles.command}>docker build</span>{" "}
                .
              </p>

              <p style={styles.success}>
                ✓ Image built successfully
              </p>

              <p>
                <span style={styles.green}>➜</span>{" "}
                <span style={styles.command}>kubectl</span>{" "}
                get pods
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr 0.5fr",
                  gap: "10px",
                  padding: "15px 10px",
                  background: "#ffffff05",
                  borderRadius: "8px",
                  fontSize: "10px",
                }}
              >
                <span style={{ color: "#8290a5" }}>NAME</span>
                <span style={{ color: "#8290a5" }}>STATUS</span>
                <span style={{ color: "#8290a5" }}>READY</span>

                <span>app-server</span>
                <span style={styles.success}>Running</span>
                <span>1/1</span>

                <span>api-service</span>
                <span style={styles.success}>Running</span>
                <span>1/1</span>
              </div>

              <p style={{ marginBottom: 0 }}>
                <span style={styles.green}>➜</span>{" "}
                <span style={styles.green}>█</span>
              </p>
            </div>
          </div>

          {/* Status cards */}
          <div style={styles.floatingCard}>
            <span style={{ fontSize: "25px", color: "#8bf5b1" }}>
              ⚙
            </span>

            <div style={{ flex: 1 }}>
              <strong>CI/CD Pipeline</strong>
              <div style={styles.cardDescription}>
                Automation enabled
              </div>
            </div>

            <span style={styles.green}>✓</span>
          </div>

          <div style={styles.floatingCard}>
            <span style={{ fontSize: "25px", color: "#7eb7ff" }}>
              ◈
            </span>

            <div style={{ flex: 1 }}>
              <strong>Cloud Native</strong>
              <div style={styles.cardDescription}>
                Build for scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" style={styles.section}>
        <div style={styles.sectionTitle}>
          <div style={styles.eyebrow}>YOUR LEARNING PATH</div>

          <h2
            style={{
              fontSize: "clamp(25px, 4vw, 36px)",
              letterSpacing: "-1px",
            }}
          >
            Skills that move you forward.
          </h2>

          <p
            style={{
              ...styles.paragraph,
              margin: "0 auto",
            }}
          >
            Build practical skills for the modern engineering world.
          </p>
        </div>

        <div style={styles.grid}>
          {skills.map((skill) => (
            <article
              key={skill.number}
              style={{
                ...styles.card,
                borderColor:
                  hovered === skill.number
                    ? "#8bf5b166"
                    : "#ffffff15",
                transform:
                  hovered === skill.number
                    ? "translateY(-5px)"
                    : "translateY(0)",
                background:
                  hovered === skill.number
                    ? "#8bf5b10b"
                    : "#ffffff05",
              }}
              onMouseEnter={() => setHovered(skill.number)}
              onMouseLeave={() => setHovered("")}
            >
              <span
                style={{
                  fontSize: "28px",
                  color: "#8bf5b1",
                }}
              >
                {skill.icon}
              </span>

              <div
                style={{
                  ...styles.cardNumber,
                  marginTop: "22px",
                }}
              >
                MODULE {skill.number}
              </div>

              <h3>{skill.title}</h3>

              <p style={styles.cardDescription}>
                {skill.description}
              </p>

              <span style={styles.green}>Explore skills ↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <strong style={{ color: "#f4f7fb", fontSize: "17px" }}>
          <span style={styles.green}>S</span>yntacBridge.
        </strong>

        <span>Learn today. Engineer tomorrow.</span>

        <span>
          © {new Date().getFullYear()} SyntacBridge
        </span>
      </footer>
    </main>
  );
}

export default App;
