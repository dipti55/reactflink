import { BrowserRouter, Route, Routes } from "react-router-dom"
import UseCasePage from "./pages/UseCasePage"
import Layout from "./layouts/Layout";

import './../src/App.css'
import ExternalConnectorsPage from "./pages/ExternalConnectorsPage";
import EditExternalConnector from "./pages/EditExternalConnector";
import UseCaseForm from "./pages/UseCaseForm";
import ExternalConnectoreForm from "./pages/ExternalConnectoreForm";
import StageJobs from "./pages/StageJobs";
import UseCaseDetails from "./pages/UseCaseDetails";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
        <Route path="/login" element={<h1>Login Page</h1>} />

           {/* Protected Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<UseCasePage/>} />
            <Route path="use-cases" element={<UseCasePage/>} />
            <Route path="external-connectors" element={<ExternalConnectorsPage/>} />
            <Route path="external-connectors/add" element={<ExternalConnectoreForm/>}/>
            <Route path="udfs" element={<h1>UDFs</h1>} />
            <Route path="edit-external-connector/:id" element={<EditExternalConnector/>} />
            <Route path="use-case-details/add" element={<UseCaseForm/>} />
            <Route path="stage-jobs/add" element={<StageJobs/>}/>
            <Route path="use-case-details/:id" element={<UseCaseDetails/>}/>
            {/* <Route path="user-case" element={<h1>user case</h1>}/>
            <Route path="user-case" element={<h1>user case</h1>}/>
            <Route path="user-case" element={<h1>user case</h1>}/>
            <Route path="user-case" element={<h1>user case</h1>}/>
            <Route path="user-case" element={<h1>user case</h1>}/> */}
          </Route>


          {/* 404 Not Found Route */}
          <Route path="*" element={<h1>Not Found</h1>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
