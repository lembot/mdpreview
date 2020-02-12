import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Display,
  Input,
  Wrapper
} from './components'

const App = () => {
  const [markdown, setMarkdown] = useState(null)
  return (
    <Wrapper>
      <Input setMarkdown={setMarkdown} />
      <Display markdown={markdown} />
    </Wrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))