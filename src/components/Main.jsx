

function Main() {
    return (
        
        <div style={{paddingTop : '150px', paddingBottom : '200px'}}>
<h1 style={{
    color: 'white',
    fontSize: '11vw',
    fontWeight: '900',
    letterSpacing: '5px',
    textShadow: '0  5px #000000, 0 10px',
}}>
    portFolio
</h1>
<h1 style={{
    color: 'white',
    fontSize: '11vw',
    fontWeight: '900',
    textShadow: '0  5px #000000, 0 10px',
}}>
    FrontEnd
</h1>
        <div style={{
    width: '40vw',
    height: '40vw',
    borderRight: '3px dashed rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    float: 'left',
    position: 'absolute',
    top: -10,
    left : '-13vw',
    transform: 'rotate(40deg)',
}}></div>
<div style={{
    width: '40vw',
    height: '40vw',
    border: '3px dashed rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    float: 'right',
    transform: 'rotate(-20deg)',
    left : '75vw'
}}></div>

        
        </div>
    );
}

export default Main;
