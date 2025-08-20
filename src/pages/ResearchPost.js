import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

const STORAGE_KEY = 'research_posts_v1';

function readPosts() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

const ResearchPost = () => {
	const { slug } = useParams();
	const post = useMemo(() => readPosts().find((p) => p.slug === slug), [slug]);

	if (!post) {
		return (
			<div className="main-content">
				<div className="container">
					<section className="section">
						<h3>Post not found</h3>
						<p>The post you are looking for does not exist. Go back to the <Link to="/research" className="project-link">Research list</Link>.</p>
					</section>
				</div>
			</div>
		);
	}

	return (
		<div className="main-content">
			<div className="container">
				<section className="section">
					<h3>{post.title}</h3>
					<p style={{ color: '#666', marginBottom: 16 }}>{post.summary}</p>
					
					{post.fileName && (
						<div style={{ 
							background: '#e3f2fd', 
							padding: '12px', 
							borderRadius: '6px', 
							marginBottom: '20px',
							border: '1px solid #bbdefb'
						}}>
							<strong>📎 Original PDF:</strong> {post.fileName}
						</div>
					)}
					
					<div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{post.content}</div>
					
					{post.attachmentUrl && (
						<div className="project-links" style={{ marginTop: 16 }}>
							<a href={post.attachmentUrl} className="project-link" target="_blank" rel="noreferrer">
								{post.fileName ? `Download ${post.fileName}` : 'View Attachment'}
							</a>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default ResearchPost;


