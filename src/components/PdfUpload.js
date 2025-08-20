import React, { useState } from 'react';

const PdfUpload = ({ onPostCreated }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

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

  const handleCreatePost = () => {
    if (!title.trim() || !summary.trim() || !file) {
      alert('Please fill in all fields and select a PDF file');
      return;
    }

    // Create post data
    const postData = {
      title: title.trim(),
      summary: summary.trim(),
      content: content.trim() || 'PDF content uploaded.',
      file: file,
      fileName: file.name,
      createdAt: new Date().toISOString()
    };

    onPostCreated(postData);
    
    // Reset form
    setFile(null);
    setContent('');
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
            <span style={{ fontSize: '0.9rem', color: '#666' }}>
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </span>
          </div>
        )}

        {file && (
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
                Additional Content (optional)
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                placeholder="Add any additional notes or content..."
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e9ecef' }}
              />
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
