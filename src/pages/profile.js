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
          <div class="blog-post" style={{textAlign: "left"}}>
            <h2>What is our focus?</h2>
            Nobody is able to know everything in every space in IT. So we focused in specific spaces to offer you the best consulting expierence.
            <br/><br/>
            <h3>Architecture</h3>
            You are looking for somebody who is able to handle the full picture of a greenfield architecture or is even able to convert your brownfield
            architecture into a validated and industry accepted standardized, but customized, design?<br/>
            We are the right partner for you. We are specialized in enterprise-sized architectures for:
            <br/><br/>
            <b>VMware Validate Design for SDDC</b>
            <br/><br/>
            <i>or</i>
            <br/><br/>
            <b>individual products of the stack like</b>
            <br/><br/>
            <ul>
              <li>VMware vSphere</li>
              <li>VMware vRealize Suite</li>
              <ul>
                <li>vRealize Automation</li>
                <li>vRealize Log Insight</li>
                <li>vRealize Operations</li>
                <li>vRealize Lifecycle Manager</li>
              </ul>
              <li>VMware NSX-T and NSX-V</li>
              <li>VMware Cloud on AWS</li>
              <li>VMware Integrated OpenStack</li>
              <li>VMware Enterprise PKS</li>
            </ul>
            <br/>
            As part of the architecture role we deliver:
            <br/><br/>
            <ul>
              <li>Requirements engineering</li>
              <li>Architecture documentation (High- and Low level designs)</li>
              <li>Work package definition</li>
            </ul>
            <br/>
            <h3>Automation</h3>
            Everybody talks about automation today. We do it now for seven years on-going on an enterprise level with:
            <br/><br/>
            <ul>
              <li>vRealize Automation</li>
              <li>vRealize Orchestrator</li>
              <li>PowerShell/PowerCLI</li>
            </ul>
            <br/>
            Starting from the really beginning, we
            <br/><br/>
            <ul>
              <li><b>Analyse</b> the automation requirements</li>
              <li><b>Define</b> the automation processes with stakeholders</li>
              <li><b>Implement</b> workflows and scripts</li>
              <li><b>Test</b> and <b>stage</b> the automation items</li>
            </ul>
            <br/><br/>
            <h2>What are our references?</h2>
            <ul>
              <li>Large German banks</li>
              <li>Large German insurances</li>
              <li>Well known business software companies</li>
              <li>Global industry players</li>
            </ul>
            <br/><br/>
            You are interested?
            <br/><br/>
            <Button type="secondary" size="large" href="./contact-us">Contact us</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage