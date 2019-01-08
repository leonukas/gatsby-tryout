import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to this website</h1>
    <p>This is a sample site for Gatsby SSG</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
