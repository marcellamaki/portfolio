import React from 'react'
import { Document } from 'react-pdf'
import { myResume } from '../Resume.pdf'

const Resume = () => {
  return (
      <Document file={myResume} />
      )
}

export default Resume;
