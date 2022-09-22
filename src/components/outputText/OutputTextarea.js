import { useEffect } from 'react';
import './OutputTextarea.css';

function OutputTextarea(props) {
  const { formattedJson } = props

  useEffect(() => {
    const lineNumbers = document.querySelector('.output-line-numbers')

    const numberOfLines = formattedJson.split('\n').length
    lineNumbers.innerHTML = Array(numberOfLines)
      .fill('<span></span>')
      .join('')

  })

  return (
    <>
      <div className="editor-title">Output</div>
      <div className="editor">
        <div className="output-line-numbers">
          <span></span>
        </div>
        <textarea className='output-textarea' readOnly={true} value={formattedJson}></textarea>
      </div>
    </>
  );
}

export default OutputTextarea;
