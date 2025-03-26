import React from 'react'
import './editor.css'
import Layers from './layers'
import Options from './options'
import Workspace from './workspace'

function editor({previewImg}) {
  return 
  (
    <div>
      <Layers previewImg={previewImg}/>
      <Options previewImg={previewImg}/>
      <Workspace previewImg={previewImg}/>
    </div>
  )
}

export default editor