import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import include from 'underscore.string/include'

class MainIndex extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }

  render () {
    return (
      <div>
        <div className="mainHead h-card" style={{float: 'left', padding:"20px"}}>
          <img className="u-photo" style={{height: '20em'}}
            src={prefixLink('/images/BigBio2.png')} />
        </div>
        <div className="intro" style={{padding: '20px'}}>
        <p>Welcome to the personal web page of Ross A Davis.  I am a software engineer living and working in San Francisco.  I am a maker and a lifelong learner, always looking for new opportunities.  Look around my site and check me out, for a questions and/or comments head on over to my contact page.</p>
        </div>
        <div className="LI-profile-badge" data-version="v1" data-size="medium"
        data-locale="en_US" data-type="profinder" data-theme="light"
        data-vanity="rossad">
        <a className="LI-simple-link"
        href="https://www.linkedin.com/profinder/pro/rossad?trk=profinder-badge">Ross
        Davis</a>
        </div>
      </div>
    )
  }
}

MainIndex.propTypes = {
  route: React.PropTypes.object,
}

export default MainIndex
