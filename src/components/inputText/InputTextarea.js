import { useEffect } from 'react';
import './InputTextarea.css';

function InputTextarea(props) {

  const { onChange: setText, text } = props;


  const handleChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
  }

  useEffect(() => {
    const textarea = document.querySelector('.input-textarea')
    const lineNumbers = document.querySelector('.input-line-numbers')

    const handler = event => {
      const numberOfLines = event.target.value.split('\n').length

      lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('')
    }

    textarea.addEventListener('keyup', handler)

    return () => {
      textarea.removeEventListener('keyup', handler);
    };
  })

  return (
    <>
      <div className="editor-title">Input</div>
      <div className="editor">
        <div className="input-line-numbers">
          <span></span>
        </div>
        <textarea className='input-textarea' onChange={handleChange} value={text}></textarea>
      </div>
    </>
  );
}

export default InputTextarea;
