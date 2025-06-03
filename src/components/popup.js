
import {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [users, setUsers] = useState([]);
    
  const getUsers = async () => {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUsers(Array.isArray(json) ? json : [json]);
    };

      useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      <Modal className='textalign' data-bs-theme="dark" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal'>
        
          <div>
            
             {users.map(user => (
            <img className='imgmodal' src={user.avatar_url} alt={`Avatar of ${user.name}`} />
            )) } 
          </div>
          <div className='contentmodal'>
          <div className='surlign3'>
         
           {users.map(user => (
            <p>
              <img src='/images/icones/profil.png' alt='icone profil' /> {user.name}
            </p>

            )) } 
          </div>
          <div className='surlign3'>
            
              <img src='/images/icones/epingler.png' alt='icone map'></img> 
          </div> 
          <div className='surlign3'>
             {users.map(user => (
            <p>
              <img src='/images/icones/carte-de-visite.png' alt='icone carte'></img> {user.bio}</p>
            )) }
          </div>
          <div className='surlign3'>
             {users.map(user => (
            <p>
              <img src='/images/icones/cube.png' alt='icone repositories'></img> Repositories : {user.public_repos}</p>
            )) }
          </div>
          <div className='surlign3'>
             {users.map(user => (
            <p> <img src='/images/icones/ami.png' alt='icone follower'></img> Followers : {user.followers}</p>
            )) }
          </div>
          <div className='surlign3'>
             {users.map(user => (
            <p> <img src='/images/icones/ami.png' alt='icone follower'></img> Following : {user.following}</p>
            )) }
          </div>
       </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;