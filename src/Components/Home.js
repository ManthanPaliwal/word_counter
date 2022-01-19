import React, { useState } from 'react'

const Home = (props) => {
    const [text, setText] = useState([""]);

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.viewAlert('Converted to upperCase', 'Success')
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.viewAlert("Converted to LowerCase", "Success")
    }
    const handleClear = () => {
        setText('');
    }
    return (
        <>
            <div style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
                <div className='container mt-4'>
                    <div className="form-floating">
                        <h2 >Text Convertion</h2>
                        <textarea className="form-control" value={ text } onChange={ handleOnChange } style={ { backgroundColor: props.mode === 'light' ? 'white' : '#061c3d', height: '30vh', color: props.mode === 'dark' ? 'white' : 'black' } } />
                    </div>
                    <button className={ `btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-2 ` } onClick={ handleUpCase }>Convert into UpperCase</button>
                    <button className={ `btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-2 ` } onClick={ handleLoCase }>Convert into LowerCase</button>
                    <button className={ `btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-2` } onClick={ handleClear }>Clear</button>
                </div>
                <div className="container mt-4" style={ { Color: props.mode === 'dark' ? 'white' : 'dark' } }>
                    <h2>Your Text Summary</h2>
                    <p >Words { text.split(" ").length } </p>
                    <p>Caracters { text.length }</p>
                    <p>{ 0.008 * text.split(" ").length } Minutes Read Time</p> 
                    <p>{ Text }</p>
                    <h2>Preview</h2>
                    <p>{ text.length > 0 ? text : "Enter somthing in above to preview it here" }</p>
                </div>
            </div>
        </>
    )
}
export default Home;