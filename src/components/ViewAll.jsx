import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchDatafromApi = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchDatafromApi() }, [])
return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">User ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Completed Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.id}</th>
                                                        <td>{value.userId}</td>
                                                        <td>{value.title}</td>
                                                        <td>{value.completed}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ViewAll