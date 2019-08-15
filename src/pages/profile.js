import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const ProfilePage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
          <h1>You ask. We deliver.</h1>
          <br/>
          <div class="blog-post" style={{align: left}}>
            <h2>What is our focus?</h2>
            Nobody is able to know everything in every space in IT. So we focused in specific spaces to offer you the best consulting expierence.
            <h3>Architecture</h3>
            You are looking for somebody who is able to handle the full picture of a greenfield architecture or is even able to convert
            your brownfield architecture into a validated and industry accepted standardized, but customized, design?
            We are the right partner for you. We are specialized in enterprise-sized architectures for:
            <br/>
            VMware Validate Design for SDDC
            <br/>
            <i>or just single products like</i>
            <br/>
            <ul>
              <li>VMware vSphere</li>
              <li>VMware vRealize Suite</li>
              <ul>
                <li>vRealize Automation</li>
                <li>vRealize Log Insight</li>
                <li>vRealize Operations</li>
                <li>vRealize Lifecycle Manager</li>
              </ul>
              <li>VMware Cloud on AWS</li>
            </ul>
            or 

            <h3>Automation</h3>
            Everybody talks about automation today. We do it for seven years on-going with:
            <ul>
              <li>vRealize Automation</li>
              <li>vRealize Orchestrator</li>
              <li>PowerShell/PowerCLI</li>
            </ul>
            <Button type="secondary" size="large" href="./contact-us">Contact us</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage