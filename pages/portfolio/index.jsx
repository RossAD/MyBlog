import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

class PortfolioIndex extends React.Component {
  render () {
    return (
      <div >
        <div className="gitspy" style={{display:"inline-flex"}}>
          <img src={prefixLink('/images/gitspy.png')} style={{
            float:'left',
            height:'20em',
            width:'18em',
            padding:'10px'
          }} />
          <p style={{
            padding:'10px'
          }}><a href={"http:\\www.gitspy.com"}>GitSpy</a></p>
          <p style={{
            padding:'10px'
          }}>GitSpy is a communication tool for fast-moving software development teams. It gives you a real-time view of what your developer teammates are working on, and what files they are affecting locally.</p>
        </div>
        <hr/>
        <div className="foodzen" style={{display:"inline-flex"}}>
          <img src={prefixLink('/images/FoodZen.png')} style={{
            float:'left',
            height:'18em',
            width:'18em',
            padding:'10px'
          }}/>
          <p style={{
            padding:'10px'
          }}><a href={"https://github.com/TantalizingThyroids/GigglingGoiters"}>FoodZen</a></p>
          <p style={{
            padding:'10px'
          }}>A convenient web based tool to get recipes and nutritional information based on ingredients around the  kitchen.</p>
        </div>
        <hr/>
        <div className="evently" style={{display:"inline-flex"}}>
         <img src={prefixLink('/images/evently.png')} style={{
            float:'left',
            height:'20em',
            width:'18em',
            padding:'10px'
          }}/>
          <p style={{
            padding:'10px'
          }}><a href={"https://github.com/TantalizingThyroids/Event.ly"}>Event.ly</a></p>
          <p style={{
            padding:'10px'
          }}>An event scheduling app that gives up-to-date notifications based on changing weather conditions.</p>
        </div>
        <hr/>
        <Bio/>
      </div>
    )
  }
}

PortfolioIndex.propTypes = {
  route: React.PropTypes.object
}

export default PortfolioIndex
