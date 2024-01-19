import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Produce() {
    return (
        <div style={{paddingTop : '200px'}}>

            <div style={{display : 'flex'}}>
                <div style={{flex : 1}}>
                <h2>
            문제에 직면할 때마다 새로운 기회로 바라보고, <br /> 그것을 해결함으로써 느끼는 성취감을 중요하게 생각합니다.
            </h2>   
                </div>
                <div style={{flex : 1}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            김민서
                        </Card.Text>
                    </Card.Body>
                </Card>
    
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>
                            010-7222-5898
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>E-mail</Card.Title>
                        <Card.Text>
                            kingkaminseo@gmail.com
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Produce