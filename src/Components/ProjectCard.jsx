import React, { useState } from 'react';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>
       <MDBCard onClick={toggleOpen}>
      <MDBCardImage src='https://media.assettype.com/analyticsinsight/import/wp-content/uploads/2023/06/Exploring-the-opportunities-of-AI-in-computer-graphics.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Project title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>

    <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
             <div className="row">
              <div className="col-6 p-3">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2020/09/03/computer-desktop-flat-illustration-Graphics-5271302-2-580x386.jpg" width={'100%'} alt="" />

              </div>

              <div className="col-6">
              <h3>Descirption</h3>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>

              <h3>Technologies</h3>
              <p>React, Node</p>
              </div>
             </div>
            </MDBModalBody>
            <MDBModalFooter>
              <h3>View on</h3>
              <MDBBtn color='dark'>
              <FaGithub className='fs-3' />
              </MDBBtn>
              <MDBBtn><FaLink className='fs-3' /></MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  )
}

export default ProjectCard