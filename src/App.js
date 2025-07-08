import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-top">
            <h1 className="name">Islam Md Monaim</h1>
          </div>
          <div className="contact-info">
            <span>📍 Berlin, Germany</span>
            <span>📞 +49 1724516678</span>
            <span>✉ monaimk072@gmail.com</span>
            <span><a href="https://www.linkedin.com/in/md-monaim-islam-295928161/" target="_blank" rel="noopener noreferrer" className="linkedin-link">🔗 LinkedIn</a></span>
          </div>
          <div className="title">
            <h2>Data Analyst | SQL | Tableau | Business Intelligence</h2>
            <p className="summary">*5+ years of experience in transforming data into actionable insights for revenue growth and cost optimization.*</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="section">
            <h3>Professional Summary</h3>
            <p>
              Data Analyst with expertise in SQL, Tableau, Excel, and predictive modeling, specializing in financial analysis and performance optimization. 
              Proven ability to automate reports, build dashboards, and communicate insights to stakeholders. 
              Fluent in English (professional proficiency) and beginner in German (A2 level, actively improving).
            </p>
          </section>

          <section className="section">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Technical:</h4>
                <ul>
                  <li><strong>Data Analysis:</strong> SQL, BigQuery, Excel (Pivot Tables, VLOOKUP), Python (Pandas, NumPy)</li>
                  <li><strong>Visualization:</strong> Tableau, Power BI, Google Data Studio</li>
                  <li><strong>Statistical Tools:</strong> R, SPSS, Regression Analysis</li>
                  <li><strong>ETL/Data Pipelines:</strong> Data cleaning, transformation, automation</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Business:</h4>
                <ul>
                  <li>Financial Analysis | KPI Tracking | Pricing Optimization</li>
                  <li>Cross-functional collaboration | Stakeholder reporting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <h3>Work Experience</h3>
            <div className="experience-item">
              <div className="job-header">
                <h4>Data Analyst</h4>
                <span className="company">Knight Enterprise</span>
                <span className="location">Dhaka, Bangladesh</span>
                <span className="duration">2023–2025</span>
              </div>
              <ul>
                <li>Automated financial reports using SQL and Tableau, reducing manual workload by 30%.</li>
                <li>Identified cost-saving opportunities through data-driven resource allocation, cutting expenses by 15%.</li>
                <li>Built interactive dashboards to track KPIs (customer churn, product performance) for executive teams.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="job-header">
                <h4>Business Development Manager</h4>
                <span className="company">BravoT ITD</span>
                <span className="location">Suwon, South Korea</span>
                <span className="duration">2019–2021</span>
              </div>
              <ul>
                <li>Analyzed marketing campaign data (Google Ads, email) using Excel, improving lead generation by 20%.</li>
                <li>Collaborated with engineering teams to translate business requirements into technical specs.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="job-header">
                <h4>Data Analyst (Research)</h4>
                <span className="company">International Online Journal Hub</span>
                <span className="location">Dhaka, Bangladesh</span>
                <span className="duration">2018–2022</span>
              </div>
              <ul>
                <li>Conducted statistical analysis (SPSS, R) on large datasets to identify trends for academic publications.</li>
                <li>Designed data warehousing solutions to streamline research workflows.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h3>Projects</h3>
            <div className="github-profile">
              <a href="https://github.com/Monaim-knight" target="_blank" rel="noopener noreferrer" className="github-link">
                <span>🐙 View My GitHub Profile</span>
              </a>
            </div>
            <div className="projects-grid">
              <div className="project-item">
                <h4>K-Beauty Hub</h4>
                <p>E-commerce platform for Korean beauty products with modern UI/UX design, product catalog, and shopping cart functionality.</p>
                <div className="project-links">
                  <a href="https://github.com/Monaim-knight/k-beauty-hub" target="_blank" rel="noopener noreferrer" className="project-link">
                    🛍️ View Project
                  </a>
                </div>
              </div>
              <div className="project-item">
                <h4>Website Visitors Time Series Forecasting</h4>
                <p>End-to-end time series analysis and forecasting using R, ARIMA modeling, Dickey-Fuller Test, ACF/PACF analysis for website traffic prediction.</p>
                <div className="project-links">
                  <a href="https://github.com/Monaim-knight/visitors-forcasting-" target="_blank" rel="noopener noreferrer" className="project-link">
                    📈 View Project
                  </a>
                </div>
              </div>
              <div className="project-item">
                <h4>The Convergence and Divergence Theory</h4>
                <p>
                  Analysis and code for the convergence and divergence theory, including R scripts, data, and generated plots (Density.pdf, Rplot.pdf).
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Monaim-knight/lee-2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    📚 View Project
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-header">
                <h4>M.Sc. in Economics: Data Science & Policy</h4>
                <span className="institution">Martin Luther University</span>
                <span className="location">Halle, Germany</span>
                <span className="duration">2022–Present</span>
              </div>
              <p>Relevant coursework: Machine Learning, Data Mining, Business Intelligence</p>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h4>M.A. in International Trade</h4>
                <span className="institution">Ajou University</span>
                <span className="location">South Korea</span>
                <span className="duration">2020–2022</span>
              </div>
            </div>
          </section>

          <section className="section">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li>Google Data Analytics Certificate (or similar)</li>
              <li>Tableau Desktop Specialist</li>
            </ul>
          </section>

          <section className="section">
            <h3>Languages</h3>
            <div className="languages">
              <div className="language-item">
                <strong>English:</strong> Fluent
              </div>
              <div className="language-item">
                <strong>German:</strong> A2 (Basic) – Enrolled in intensive language course
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
