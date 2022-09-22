import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/buttons/Button';
import InputTextarea from './components/inputText/InputTextarea';
import OutputTextarea from './components/outputText/OutputTextarea';
import Title from './components/title/Title';
import { JsonContext } from './contexts/contexts';
import { formatJson } from './helpers/formatter';

function App() {
  const [text, setText] = useState('')
  const [formattedJson, setFormattedJson] = useState('')

  return (
    <div className='container'>
      <div className='button-row'>
        <Title text='JSON Formatter' />
        <Button label='Pretty' callback={() => setFormattedJson(formatJson(text))}></Button>
        <Button label='Clear' callback={() => {
          setText('')
          setFormattedJson('')
        }}></Button>
      </div>
      <div className='column-container'>
        <div className='left-column'>
          <JsonContext.Provider value={text}>
            <InputTextarea onChange={setText} text={text}></InputTextarea>
          </JsonContext.Provider>
        </div>
        <div className='right-column'>
          <OutputTextarea formattedJson={formattedJson}></OutputTextarea>
        </div>
      </div>
    </div>
  );
}

export default App;
