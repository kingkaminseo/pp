import Produce from './Produce'
import './font.css'

function About() {
    return(
        <div style={{boxShadow: '0 -10px 20px rgb(0, 0, 0)', backgroundColor : 'white'}}>

 
                <div style={{backgroundColor : 'rgb(1, 58, 251)', width : '50vw', height : '50vw', position : 'absolute', borderRadius : '50%',zIndex : '0',right : '70vw'}}></div>
                <h1>About</h1>
                <Produce/>
        </div>
    )
}

export default About