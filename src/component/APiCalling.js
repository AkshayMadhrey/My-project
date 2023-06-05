import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

import Card from 'react-bootstrap/Card';

export default function () {
    const [data, setData] = useState([])
        console.log(data)
        useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts")

                .then((data) => {
                    setData(data.data.slice(0, 10))
                })

        }, [])

        function deleteCard(i) {
            console.log(i)
            let total = [...data]
            total.splice(i, 1)
            setData(total)
        }

        return (
            <>
                {
                    data.map((d, i) => {
                        console.log(d.id);
                        return (
                            <>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        
                                        <Card.Text>
                                            {d.id}
                                        </Card.Text>
                                        <Card.Text>
                                            {d.title}
                                        </Card.Text>
                                        <Card.Text>
                                            {d.body}
                                        </Card.Text>
                                    </Card.Body>
                                    <button onClick={() => deleteCard(i)}>delete</button>
                                </Card>
                            </>
                        )
                    })
                }



            </>
        );
    }
