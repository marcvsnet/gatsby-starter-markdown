import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "steelblue", fontSize: 50, fontWeight: 'bold'}}>
            Who are we?/Who am I?
          </p>
          <h2>Profile of Marcus Schoen</h2>
          <br/>
          <Button type="primary" size="large" href="./contact-us">Contact us</Button>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage