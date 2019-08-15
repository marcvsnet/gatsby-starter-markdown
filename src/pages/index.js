import React from 'react'
import Layout from '../components/Layout'
import headerPic from '../images/undraw_light_the_fire_gt58.png';


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <img style={{width: 300}} src={headerPic} alt="Logo" />
          <p style={{color: "black", fontSize: 30}}>
            Probleme kann man niemals<br/>mit derselben Denkweise lösen,<br/>durch die sie entstanden sind.
          </p>
          <i>Albert Einstein</i>
          <br/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage