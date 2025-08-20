import React from 'react';

const Home = () => {
	return (
		<div className="main-content">
			<div className="container">
				<section className="section">
					<h3>Professional Summary</h3>
					<p>
						Data professional with 4+ years using SQL and Python to build ETL pipelines, model data, and deliver Tableau dashboards. Familiar with AWS/Redshift and Airflow concepts; collaborate with stakeholders to define KPIs and make data accurate, accessible, and actionable. Eager to grow as a Junior BI Engineer and contribute from day one.
					</p>
				</section>

				<section className="section">
					<h3>Technical Skills</h3>
					<div className="skills-grid">
						<div className="skill-category">
							<h4>Languages</h4>
							<ul>
								<li>SQL, Python, R</li>
							</ul>
						</div>
						<div className="skill-category">
							<h4>BI &amp; Analytics</h4>
							<ul>
								<li>Tableau, Google Analytics, SPSS, BigQuery</li>
							</ul>
						</div>
						<div className="skill-category">
							<h4>Data Engineering</h4>
							<ul>
								<li>ETL with Python (pandas), SQL transformations, basic Airflow, Git/GitHub</li>
							</ul>
						</div>
						<div className="skill-category">
							<h4>Cloud &amp; Warehousing</h4>
							<ul>
								<li>AWS (fundamentals), Redshift (concepts), Data Modeling (star/snowflake)</li>
							</ul>
						</div>
						<div className="skill-category">
							<h4>Methods</h4>
							<ul>
								<li>Descriptive/Inferential Stats, Regression, Time Series &amp; Forecasting</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="section">
					<h3>Professional Experience</h3>
					<div className="experience-item">
						<div className="job-header">
							<h4>Digital Analytics / Data Specialist</h4>
							<span className="company">Knight Enterprise</span>
							<span className="location">Dhaka, Bangladesh</span>
							<span className="duration">June 2023 – Present</span>
						</div>
						<ul>
							<li>Built end‑to‑end data prep/ETL workflows with Python (pandas) and SQL to consolidate multi‑source marketing data.</li>
							<li>Partnered with stakeholders to define KPIs and delivered Tableau dashboards for campaign and funnel performance.</li>
							<li>Introduced basic data models and quality checks to improve accuracy, accessibility, and consistency of datasets.</li>
						</ul>
					</div>

					<div className="experience-item">
						<div className="job-header">
							<h4>Data Analyst</h4>
							<span className="company">IOJH</span>
							<span className="location">Dhaka, Bangladesh</span>
							<span className="duration">July 2018 – April 2022</span>
						</div>
						<ul>
							<li>Performed statistical analysis (regression, correlation, descriptive) in SPSS/Python; communicated insights to teams.</li>
							<li>Automated recurring reports using SQL/Python and improved documentation of data transformations.</li>
							<li>Collaborated with peers on data model maintenance to keep analyses clear and reusable.</li>
						</ul>
					</div>

					<div className="experience-item">
						<div className="job-header">
							<h4>Business Development Manager</h4>
							<span className="company">BravoT</span>
							<span className="location">Suwon, South Korea</span>
							<span className="duration">September 2019 – December 2021</span>
						</div>
						<ul>
							<li>Developed and executed email marketing campaigns to drive customer acquisition and retention.</li>
							<li>Conducted marketing analytics and measurement to optimize campaign performance.</li>
							<li>Managed weekly/monthly campaign targets including call volume, lead generation, and new business metrics.</li>
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
							<h4>E‑commerce Analytics Enablement</h4>
							<p>Integrated web and campaign data; defined KPIs and built prototype Tableau dashboards for a storefront use case.</p>
							<div className="project-links">
								<a href="https://tableau.com" target="_blank" rel="noopener noreferrer" className="project-link">Tableau</a>
								<a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer" className="project-link">Python (pandas)</a>
							</div>
						</div>
						<div className="project-item">
							<h4>Website Visitors Time Series Analysis &amp; Forecasting</h4>
							<p>Built ARIMA forecasts and seasonality analysis to anticipate traffic; informed content planning and budgets.</p>
							<div className="project-links">
								<a href="https://github.com/Monaim-knight/visitors-forcasting-" target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
								<a href="https://www.statsmodels.org/" target="_blank" rel="noopener noreferrer" className="project-link">ARIMA</a>
							</div>
						</div>
						<div className="project-item">
							<h4>Financial Data Analytics in Python</h4>
							<p>Comprehensive financial analytics system for investment and market analysis; statistical models for trend analysis and risk assessment.</p>
							<div className="project-links">
								<a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer" className="project-link">Python</a>
								<a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" className="project-link">Statistical Modeling</a>
							</div>
						</div>
					</div>
				</section>

				<section className="section">
					<h3>Education</h3>
					<div className="education-item">
						<div className="education-header">
							<h4>Master of Economics: Data Science &amp; Policy</h4>
							<span className="institution">Martin Luther University-Wittenberg</span>
							<span className="location">Germany</span>
							<span className="duration">August 2022 – Present</span>
						</div>
						<p>Coursework: R Programming, Spreadsheet Accounting, Statistical Machine Learning</p>
					</div>
					<div className="education-item">
						<div className="education-header">
							<h4>Master of Arts in International Trade</h4>
							<span className="institution">Ajou University</span>
							<span className="location">South Korea</span>
							<span className="duration">February 2020 – February 2022</span>
						</div>
						<p>Coursework: International Trade Law, Quantitative &amp; Qualitative Research, International Finance. Award: Ajou University Dean's Award for Academic Excellence.</p>
					</div>
				</section>

				<section className="section">
					<h3>Certifications</h3>
					<ul className="certifications-list">
						<li>Think Outside of the Box: Email Marketing</li>
						<li>From Likes to Leads: Interact with Customers Online</li>
						<li>Attract and Engage Customers with Digital Marketing</li>
						<li>Make the Sale: Build, Launch, and Manage E‑commerce Stores</li>
						<li>Google Advanced Data Analytics</li>
					</ul>
				</section>

				<section className="section">
					<h3>Explore Research &amp; Blog</h3>
					<p>Visit the Research section to view posts, case studies, and infographics. You can also add a new post via the New Post page.</p>
				</section>
			</div>
		</div>
	);
};

export default Home;


