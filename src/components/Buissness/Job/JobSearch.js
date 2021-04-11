import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import JobsPagination from './JobsPagintion';
import SearchForm from './SearchForm';

const JobSearch = () => {

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

    function handleParamChange(e) {
        const param = e.target.name
        const value = e.target.value
        setPage(1)
        setParams(prevParams => {
          return { ...prevParams, [param]: value }
        })
      }

    return (
        <Container className="my-4 bg-light">
            <h1 className="text-primary mb-4">Find your Job here!</h1>
            <SearchForm params={params} onParamChange={handleParamChange}/>
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
            {loading && (
                <div class="spinner-border text-info" role="status"></div>
            )}
            {error && <h1>Error! Try refreshing</h1>}
            {jobs.map(job => {
                return <Job 
                key = {job.id} 
                job = {job} 
                />
            })}
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </Container>
    )
}

export default JobSearch;
