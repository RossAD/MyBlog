import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

class AboutIndex extends React.Component {
  render () {
    return (
      <div>
        <h1 style={{
          "text-align":"center",
          "text-decoration":"underline"
        }}>About</h1>
        <p>I am a full-stack engineer with extensive experience in both the server-side and client-side Javascript.  I love programming as it speaks to my nature as a maker, tinkerer, and a problem solver.  Working with software feeds my desire to find new and innovative ways to solve problems and improve user experience and feel.  I enjoy working in the full-stack as each end of the stack presents its own unique challenges and opportunities, of which I actively seek out and improve.
          
          In addition to Javascript I am well versed in AngularJS, NodeJS, Express, MySQL and Mongo.  I flourish in high-pressure collaborative environments as well as autonomously.</p>
        <Bio/>
      </div>
    )
  }
}

AboutIndex.propTypes = {
  route: React.PropTypes.object
}

export default AboutIndex
