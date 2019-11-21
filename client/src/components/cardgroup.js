import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function Cardgroup() {
    return (
        <div>
        <h1 className="mt-4 font-weight-bold shadow-sm p-3 mb-5 bg-white rounded">All informations</h1>
        <CardGroup className="mt-5" >

            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/400" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/400" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/400" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/400" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small  className="text-dark font-weight-bold">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        </CardGroup>
        </div>
    )
}

export default Cardgroup;