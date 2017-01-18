import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import include from 'underscore.string/include'

class MainIndex extends React.Component {
  render () {
    return (
      <div>
        <div className="h-card" className="mainHead" style={{float: 'left', padding:"20px"}}>
          <img className="u-photo" style={{height: '20em'}}
            src={prefixLink('/images/BigBio2.png')} />
        </div>
        <div className="intro" style={{padding: '20px'}}>
        <p>Welcome to the personal web page of Ross A Davis.  I am a software engineer living and working in San Francisco.  I am a maker and a lifelong learner, always looking for new opportunities.  Look around my site and check me out, for a questions and/or comments head on over to my contact page.</p>
        </div>
      </div>
    )
  }
}

MainIndex.propTypes = {
  route: React.PropTypes.object,
}

export default MainIndex
