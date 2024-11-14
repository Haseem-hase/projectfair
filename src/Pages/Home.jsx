import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'


function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-6 mt-5 p-5">
                <center>
                    <h1 style={{marginTop:'75px'}}>PROJECT FAIR</h1>
                    <h4 className='text-dark'>One Destination for all Software Development Projects</h4>
                    <p style={{textAlign:'justify'}}>Welcome to the Project Fair, where innovation, creativity, and hard work come together to showcase the incredible projects of talented individuals. Whether you're here to explore exciting new ideas, gain inspiration, or support your peers, we're thrilled to have you!</p>
                    <Link to={'/login'}><button className='btn btn-primary mt-3'>GET STARTED</button></Link>
                </center>
            </div>

            <div className="col-6">
                <img src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-businessman-and-time-management-png-image_10018388.png" className='p-5' width={'80%'} alt="" />
            </div>
        </div>

        <div className="row p-5">
            <h1 className='text-center p-3'>Explore Our Projects</h1>
            <div className="col-4">
                <ProjectCard/>
            </div>

            <div className="col-4">
            <ProjectCard/>
            </div>

            <div className="col-4">
            <ProjectCard/>
            </div>

    <center>
<Link to={'/projects'}>
<button className='btn btn-primary mt-5 w-100'>View Projects</button>
</Link>

    </center>
        </div>
    </div>
  )
}

export default Home