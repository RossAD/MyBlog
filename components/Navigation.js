import React from 'react'
import { config } from 'config'
import { link } from 'gatsby-helpers'

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
            <div className="brand js-brand">
              <a href={config.navigation.home}>{config.blogTitle}</a>
            </div>
            <div >
            <ul class="cf" >
              <li><a class="dropdown" href="#">Menu</a>
                <ul>
                  {navLinks}
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation
