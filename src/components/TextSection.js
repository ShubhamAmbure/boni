


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextSection({ heading = 'Section', text = 'No content provided' }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="card-title h4 text-primary fw-bold mb-3">{heading}</h2>
              <p className="card-text text-secondary">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

