import React from 'react'
import { config } from 'config'
import { link } from 'gatsby-helpers'
import { prefixLink } from 'gatsby-helpers'

class Navigation extends React.Component {
  showMenu () {
    const navItems = document.querySelectorAll('nav ul li')
    const navArrow = document.querySelector('.mobile-dropdown')
    navArrow.classList.toggle('js-ease-arrow')

    for (let i=0; i<navItems.length; i++) {
      if (i === 0) {
        navItems[i].classList.toggle('js-divider')
      }
      navItems[i].classList.toggle('js-nav-visible')
    }
  }

  render () {
    const navLinks = []
    for (const key in config.navigation) {
      if (config.navigation.hasOwnProperty(key)) {
        if (key === 'resume') {
          navLinks.push(<li key={key}><a href={config.navigation[key]}>résumé</a></li>)
        } else {
          navLinks.push(<li key={key}><a href={config.navigation[key]}>{key}</a></li>)
        }
      }
    }
    return (
      <header >
        <nav role="navigation">
          <div className="wrapper">
            <div className="brand">
              <a href={config.navigation.home}>{config.blogTitle}</a>
            </div>
            <div className="dropdown" >
            <ul className="cf" style={{listStyle:"none"}} >
              <li><a id="dropTag" href="#">Menu</a>
                <ul className="menu" style={{listStyle:"none"}}>
                  {navLinks}
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </nav>
        <div>
          <img className="pano" src="http://i.imgur.com/nb1A6Bp.jpg" />
        </div>
      </header>
    )
  }
}

export default Navigation
