import React from 'react';
import { Component } from 'react';
import Bio from 'components/Bio';
import PDF from 'react-pdf-js';

class Resume extends Component {
  render() {
    return (
      <div className='Resume-pdf'>
        <PDF file='RossADavisResumeV4.pdf' scale={1.75} />
      </div>
    )
  }
}


Resume.propTypes = {
  route: React.PropTypes.object
}

export default Resume
