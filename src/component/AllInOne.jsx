import React from "react";
import './All.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Project';
import APiCalling from './APiCalling';
import Table from './Table';
import MainTodo from './MainTodo';
import LoginPage from './LoginPage';
import Layout from "./Layout";
import NoPage from "./NoPage";
import Form from "./Form";
import Storage from "./Storage"
function AllInOne() {

  return (
    <>
      <BrowserRouter>
        <div className="main-nav">
          <div className="logo">
            <h2>
              
              Wrap all


            </h2>
          </div>
          <div className="router">
            <div> 
              <Layout />
            </div>
            <div className="row">
              <Routes>
                <Route>
                  <Route index element={<MainTodo />} />
                  <Route path="Table" element={<Table />} />
                  <Route path="LoginPage" element={<LoginPage />} />
                  <Route path="Project" element={<Project />} />
                  <Route path="APiCalling" element={<APiCalling />} />
                  <Route path="Form" element={<Form />} />
                  <Route path="Storage" element={<Storage />} />
                  <Route path="*" element={<NoPage />} />
                  
                </Route>
              </Routes>

            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
export default AllInOne;