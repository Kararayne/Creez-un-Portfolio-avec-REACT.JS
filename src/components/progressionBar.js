import ProgressBar from 'react-bootstrap/ProgressBar';
import '../index.css';

function ContextualExample() {
  return (
    <div className='sizeAccueil'>
      <h2 className='surlign'>Mes compétences</h2>

      <h3>HTML</h3>
      <ProgressBar className='marginProgressbar' variant="danger" now={90} />

      <h3>CSS</h3>
      <ProgressBar className='marginProgressbar' variant="info" now={80} />

      <h3>JAVASCRIPT</h3>
      <ProgressBar className='marginProgressbar' variant="warning" now={70} />

      <h3>PHP</h3>
      <ProgressBar variant="success" now={60} />

      <h3>REACT </h3>
      <ProgressBar now={50} />
    </div>
  );
}

export default ContextualExample;