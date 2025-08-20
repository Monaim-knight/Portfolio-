import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const ResearchList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <section className="section">
          <h3>Research & Blog</h3>
          <p>Articles, studies, and infographics. Create a new one from the New Post page or upload a PDF to auto-generate content.</p>
          <div className="projects-grid">
            {loading && <p style={{ color: '#666' }}>Loading posts...</p>}
            {!loading && posts.length === 0 && (
              <p style={{ color: '#666' }}>No posts yet. Click "New Post" to publish your first research or upload a PDF.</p>
            )}
            {posts.map((p) => (
              <div className="project-item" key={p.slug}>
                <h4>{p.title}</h4>
                {p.file_name && (
                  <div style={{ 
                    background: '#e8f5e8', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    marginBottom: '8px',
                    fontSize: '0.8rem',
                    color: '#2e7d32',
                    display: 'inline-block'
                  }}>
                    📎 PDF: {p.file_name}
                  </div>
                )}
                <p style={{ marginBottom: 12 }}>{p.summary}</p>
                <div className="project-links">
                  <Link to={`/research/${p.slug}`} className="project-link">Read</Link>
                  {p.file_url && (
                    <a className="project-link" href={p.file_url} target="_blank" rel="noreferrer">
                      {p.file_name ? 'Download PDF' : 'Attachment'}
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
