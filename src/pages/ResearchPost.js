import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const ResearchPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="main-content">
        <div className="container">
          <section className="section">
            <h3>Loading...</h3>
          </section>
        </div>
      </div>
    );
  }

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
          
          {post.file_name && (
            <div style={{ 
              background: '#e3f2fd', 
              padding: '12px', 
              borderRadius: '6px', 
              marginBottom: '20px',
              border: '1px solid #bbdefb'
            }}>
              <strong>📎 Original PDF:</strong> {post.file_name}
            </div>
          )}
          
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{post.content}</div>
          
          {post.file_url && (
            <div className="project-links" style={{ marginTop: 16 }}>
              <a href={post.file_url} className="project-link" target="_blank" rel="noreferrer">
                {post.file_name ? `Download ${post.file_name}` : 'View Attachment'}
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResearchPost;
