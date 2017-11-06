import React from 'react'
import { Document } from 'react-pdf/build/entry.webpack'
import  myResume from '../components/Resume.pdf'

const Resume = () => {
  return (
      <Document file={myResume} />
      )
}

export default Resume;
