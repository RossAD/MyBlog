import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'


class ContactIndex extends React.Component {
  render () {
    // TODO: Create function to generate contact entries off array
    // const contacts = {
    //   'Email':'config.email', 
    //   'Github': 'config.github',
    //   'LinkedIn': 'config.linkedin',
    //   'Twitter': 'config.twitter'
    // }
    // const contactLinks = []

    // for (var pages in contacts) {
    //   let link = contacts[pages]
    //   contactLinks.push(
    //     <li key={pages} style={{listStyle:"none"}}>{pages}: <a href={{}+ link.replace(/[']+/g,{})}>{{}+ link.replace(/[']+/g,{})}</a></li>
    //   )
    // }
    
    
    return (
      <div>
        <h1 style={{
          'text-align':'center',
          'text-decoration':'underline'
        }}>Contact Information</h1>
        <hr/>
        <div>
          <p><bold>Email: </bold><a href={"mailTo:"+ config.email }>{config.email}</a></p>
          <p><bold>Github: </bold><a href={"https://github.com/RossAD"}>{config.github}</a></p>
          <p><bold>LinkedIn: </bold><a href={"https://www.linkedin.com/in/rossad"
}>{config.linkedin}</a></p>
          <p><bold>Twitter: </bold><a href={"https://twitter.com/WlshGngstr"
}>{config.twitter}</a></p>
        </div>
        <hr/>
        <Bio/>
      </div>
    )
  }
  
}

ContactIndex.propTypes = {
  route: React.PropTypes.object
}

export default ContactIndex
