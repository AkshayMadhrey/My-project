
import { useReactToPrint } from 'react-to-print'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Table.css'
import "./Pagination.css";
import Dropdown from 'react-dropdown'
// import Pagination from './Pagination'


function Table() {
    const [selects, setSelects] = useState()
    const [getData, setGetdata] = useState()
    const ComponentPDF = useRef();
    //  console.log(ComponentPDF);
    const [userData, setUserData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [showData, setShowData] = useState([])
    let pages = [];

    for (let i = 1; i <= Math.ceil(userData.length / postsPerPage); i++) {
        pages.push(i);
    }

    useEffect(() => {
        const registerUserData = async () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(res => setUserData(res.data))
                .catch(error => console.log(error));
        }
        registerUserData();

    }, [])


    const generatePDF = useReactToPrint({
        content: () => ComponentPDF.current,
        documentTitle: "Userdata",
        onAfterPrint: () => alert("Data saved in pdf")
    });

    // useEffect(() => {
    //     const lastPostIndex = currentPage * postsPerPage;
    //     const firstPostIndex = lastPostIndex - postsPerPage;
    //     const currentPosts = userData.slice(firstPostIndex, lastPostIndex);
    //     //console.log("cureeeeeent pagesssss",currentPosts);
    //     //setShowData((prev) => [...prev, ...currentPosts])
    //     setShowData(currentPosts)
    // }, [currentPage, userData, postsPerPage])

    // useEffect(() => {
    //     setCurrentPage(() => 1)
    // }, [postsPerPage])

    const getFirstLast = (page) => {
        setCurrentPage(page);

    }
    // const prevPage = () => {
    //     setCurrentPage(currentPage - 1)
    // }
    //  const nextPage = () => {
    //     setCurrentPage(currentPage + 1)
    // }
    useEffect(() => {
        console.log("kkkjkjkj")
        // const lastPostIndex = currentPage * postsPerPage;
        //     const firstPostIndex = lastPostIndex - postsPerPage;
        const currentPosts = userData.slice(0, currentPage * postsPerPage);
        setShowData(currentPosts)
    }, [userData, currentPage, postsPerPage])
    console.log(showData)
    const getMore = () => {
        setCurrentPage(currentPage + 1)
    }


    return (
        <>
            <div className='dropdown'>
                <h2>{postsPerPage}</h2>
                <select value={postsPerPage} onChange={(e) => setPostsPerPage(e.target.value)}>

                    <option></option>
                    <option>10</option>
                    <option>20</option>
                    <option>25</option>
                    <option>50</option>

                </select>
            </div>
            {/* <div className='pagination'>
                <button className='prev-btn' onClick={() => prevPage()}>PREV</button>
                {pages.map((page, index) => {
                    return (
                        <>

                            <button
                                key={index}
                                onClick={() => { getFirstLast(page) }}
                                className={page == currentPage ? "active" : ""}>
                                {page}
                            </button>


                        </>
                    );
                })}
                <button className='prev-btn' onClick={() => nextPage()}>NEXT</button>
            </div> */}


            {/* <Pagination
                totalPosts={userData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                getFirstLast={getFirstLast}
            /> */}
            <div className='Table'>
                <h2 style={{ textAlign: "center" }}>Emp Table</h2>
                <div className='button'>
                    <button onClick={generatePDF}>Download PDF</button>
                </div>
                <table ref={ComponentPDF}>
                    <tbody>

                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                        {
                            showData.map((d) => {
                                // console.log(d);
                                return (
                                    <tr>
                                        <th>id{d.id}</th>
                                        <th>title{d.title}</th>
                                        <th>body{d.body}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='view-btn'>
                    <button onClick={getMore}>See more</button>
                </div>
            </div>
        </>
    );
}
export default Table;
