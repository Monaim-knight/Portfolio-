import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PdfUpload from '../components/PdfUpload';
import { supabase } from '../lib/supabaseClient';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const slugBase = slugify(title || 'post');
      const slug = `${slugBase}-${Date.now()}`;
      
      const { error } = await supabase
        .from('posts')
        .insert({
          slug,
          title,
          summary,
          content,
          file_url: attachmentUrl || null,
          file_name: null
        });

      if (error) throw error;
      navigate(`/research/${slug}`);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post: ' + error.message);
    }
  };

  const handlePdfPostCreated = async (postData) => {
    try {
      const slugBase = slugify(postData.title || 'post');
      const slug = `${slugBase}-${Date.now()}`;

      // Upload PDF to Supabase Storage
      const path = `pdfs/${Date.now()}-${postData.fileName}`;
      const { error: uploadError } = await supabase.storage
        .from('research')
        .upload(path, postData.file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: publicUrl } = supabase.storage
        .from('research')
        .getPublicUrl(path);

      // Insert post into database
      const { error: insertError } = await supabase
        .from('posts')
        .insert({
          slug,
          title: postData.title,
          summary: postData.summary,
          content: postData.content,
          file_url: publicUrl.publicUrl,
          file_name: postData.fileName
        });

      if (insertError) throw insertError;
      navigate(`/research/${slug}`);
    } catch (error) {
      console.error('Error creating PDF post:', error);
      alert('Error creating PDF post: ' + error.message);
    }
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
