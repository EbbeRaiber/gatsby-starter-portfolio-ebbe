// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Ebbe Raiber and this is the about me page in which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About me</title>
// Step 3: Export your component
export default AboutPage