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
        <p>This is my about page.</p>
        <Bio/>
      </div>
    )
  }
}

AboutIndex.propTypes = {
  route: React.PropTypes.object
}

export default AboutIndex
