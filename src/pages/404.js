import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>the page recuested does not exist</h1>
        
        <Link to="/">&larr; back to home</Link>
    </Layout>
)