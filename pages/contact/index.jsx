import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

class ContactIndex extends React.Component {
  render () {
    return (
      <div>
        <p>This is my contact page.</p>
        <Bio/>
      </div>
    )
  }
}

ContactIndex.propTypes = {
  route: React.PropTypes.object
}

export default ContactIndex
