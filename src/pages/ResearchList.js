import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'research_posts_v1';

function readPosts() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

const ResearchList = () => {
	const posts = useMemo(() => readPosts(), []);

	return (
		<div className="main-content">
			<div className="container">
				<section className="section">
					<h3>Research & Blog</h3>
					<p>Articles, studies, and infographics. Create a new one from the New Post page or upload a PDF to auto-generate content.</p>
					<div className="projects-grid">
						{posts.length === 0 && (
							<p style={{ color: '#666' }}>No posts yet. Click "New Post" to publish your first research or upload a PDF.</p>
						)}
						{posts.map((p) => (
							<div className="project-item" key={p.slug}>
								<h4>{p.title}</h4>
								{p.fileName && (
									<div style={{ 
										background: '#e8f5e8', 
										padding: '4px 8px', 
										borderRadius: '4px', 
										marginBottom: '8px',
										fontSize: '0.8rem',
										color: '#2e7d32',
										display: 'inline-block'
									}}>
										📎 PDF: {p.fileName}
									</div>
								)}
								<p style={{ marginBottom: 12 }}>{p.summary}</p>
								<div className="project-links">
									<Link to={`/research/${p.slug}`} className="project-link">Read</Link>
									{p.attachmentUrl && (
										<a className="project-link" href={p.attachmentUrl} target="_blank" rel="noreferrer">
											{p.fileName ? 'Download PDF' : 'Attachment'}
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default ResearchList;


