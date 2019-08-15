import React from 'react'
import Layout from '../components/Layout'
import { ReactComponent as Logo } from 'src/images/undraw_light_the_fire_gt58.svg';


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <Logo />
          <p style={{color: "black", fontSize: 30}}>
            Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.
          </p>
          <i>Albert Einstein</i>
          <br/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage