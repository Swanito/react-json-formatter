import './Title.css';

function Title(props) {
    const { text } = props;


    return (
        <h3>
            {text}
        </h3>
    );
}

export default Title;
