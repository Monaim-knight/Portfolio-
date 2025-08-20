import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfUpload = ({ onPostCreated }) => {
	const [file, setFile] = useState(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const [extractedText, setExtractedText] = useState('');
	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile && selectedFile.type === 'application/pdf') {
			setFile(selectedFile);
			// Auto-generate title from filename
			const fileName = selectedFile.name.replace('.pdf', '');
			setTitle(fileName);
		} else {
			alert('Please select a valid PDF file');
		}
	};

	const extractTextFromPdf = async (file) => {
		try {
			const arrayBuffer = await file.arrayBuffer();
			const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
			let fullText = '';

			for (let i = 1; i <= pdf.numPages; i++) {
				const page = await pdf.getPage(i);
				const textContent = await page.getTextContent();
				const pageText = textContent.items.map(item => item.str).join(' ');
				fullText += pageText + '\n';
			}

			return fullText.trim();
		} catch (error) {
			console.error('Error extracting PDF text:', error);
			throw new Error('Failed to extract text from PDF');
		}
	};

	const handleUpload = async () => {
		if (!file || !title.trim()) {
			alert('Please select a PDF file and enter a title');
			return;
		}

		setIsProcessing(true);
		try {
			const text = await extractTextFromPdf(file);
			setExtractedText(text);
			
			// Auto-generate summary from first 200 characters
			if (!summary.trim()) {
				setSummary(text.substring(0, 200) + (text.length > 200 ? '...' : ''));
			}
		} catch (error) {
			alert('Error processing PDF: ' + error.message);
		} finally {
			setIsProcessing(false);
		}
	};

	const handleCreatePost = () => {
		if (!title.trim() || !summary.trim() || !extractedText.trim()) {
			alert('Please fill in all fields');
			return;
		}

		// Create post data
		const postData = {
			title: title.trim(),
			summary: summary.trim(),
			content: extractedText,
			attachmentUrl: URL.createObjectURL(file), // Create blob URL for the PDF
			fileName: file.name,
			createdAt: new Date().toISOString()
		};

		onPostCreated(postData);
		
		// Reset form
		setFile(null);
		setExtractedText('');
		setTitle('');
		setSummary('');
	};

	return (
		<div className="section" style={{ marginBottom: '20px' }}>
			<h3>Upload PDF & Generate Blog Post</h3>
			<div style={{ display: 'grid', gap: '16px' }}>
				<div>
					<label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
						Select PDF File
					</label>
					<input
						type="file"
						accept=".pdf"
						onChange={handleFileChange}
						style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e9ecef' }}
					/>
				</div>

				{file && (
					<div>
						<button
							onClick={handleUpload}
							disabled={isProcessing}
							className="download-btn"
							style={{ marginRight: '10px' }}
						>
							{isProcessing ? 'Processing...' : 'Extract Text from PDF'}
						</button>
						<span style={{ fontSize: '0.9rem', color: '#666' }}>
							{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
						</span>
					</div>
				)}

				{extractedText && (
					<>
						<div>
							<label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
								Post Title
							</label>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
								style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e9ecef' }}
							/>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
								Summary
							</label>
							<textarea
								value={summary}
								onChange={(e) => setSummary(e.target.value)}
								rows={3}
								required
								style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e9ecef' }}
							/>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
								Extracted Content (Preview)
							</label>
							<div
								style={{
									maxHeight: '200px',
									overflowY: 'auto',
									padding: '10px',
									border: '1px solid #e9ecef',
									borderRadius: '6px',
									backgroundColor: '#f8f9fa',
									fontSize: '0.9rem',
									lineHeight: '1.5'
								}}
							>
								{extractedText.substring(0, 500)}
								{extractedText.length > 500 && '...'}
							</div>
							<p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
								Total characters: {extractedText.length}
							</p>
						</div>

						<button
							onClick={handleCreatePost}
							className="download-btn"
							style={{ backgroundColor: '#28a745' }}
						>
							Create Blog Post
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default PdfUpload;

