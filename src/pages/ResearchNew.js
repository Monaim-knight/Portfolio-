import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PdfUpload from '../components/PdfUpload';

const STORAGE_KEY = 'research_posts_v1';

function readPosts() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

function writePosts(posts) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');
}

const ResearchNew = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [content, setContent] = useState('');
	const [attachmentUrl, setAttachmentUrl] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const slugBase = slugify(title || 'post');
		const slug = `${slugBase}-${Date.now()}`;
		const next = [
			{ slug, title, summary, content, attachmentUrl, createdAt: new Date().toISOString() },
			...readPosts(),
		];
		writePosts(next);
		navigate(`/research/${slug}`);
	}

	const handlePdfPostCreated = (postData) => {
		const slugBase = slugify(postData.title || 'post');
		const slug = `${slugBase}-${Date.now()}`;
		const next = [
			{ 
				slug, 
				title: postData.title, 
				summary: postData.summary, 
				content: postData.content, 
				attachmentUrl: postData.attachmentUrl,
				fileName: postData.fileName,
				createdAt: postData.createdAt 
			},
			...readPosts(),
		];
		writePosts(next);
		navigate(`/research/${slug}`);
	};

	return (
		<div className="main-content">
			<div className="container">
				<PdfUpload onPostCreated={handlePdfPostCreated} />
				
				<section className="section">
					<h3>Manual Post Creation</h3>
					<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
						<div>
							<label style={{ display: 'block', marginBottom: 6 }}>Title</label>
							<input value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e9ecef' }} />
						</div>
						<div>
							<label style={{ display: 'block', marginBottom: 6 }}>Summary</label>
							<input value={summary} onChange={(e) => setSummary(e.target.value)} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e9ecef' }} />
						</div>
						<div>
							<label style={{ display: 'block', marginBottom: 6 }}>Content</label>
							<textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e9ecef' }} />
						</div>
						<div>
							<label style={{ display: 'block', marginBottom: 6 }}>Attachment URL (optional)</label>
							<input value={attachmentUrl} onChange={(e) => setAttachmentUrl(e.target.value)} placeholder="Link to PDF/image/infographic" style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e9ecef' }} />
						</div>
						<div>
							<button className="download-btn" type="submit">Publish</button>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default ResearchNew;


