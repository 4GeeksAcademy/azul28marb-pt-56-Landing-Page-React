import React from 'react';

const Jumbotron = () => {
  return (
    <div className="container my-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 d-flex align-items-center" style={{ minHeight: '250px' }}>
          <div>
            <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4 text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Similique corporis eum, dolorum aperiam praesentium, soluta fuga est, deserunt libero perspiciatis quas doloribus! 
              A odit architecto porro placeat quo aut ratione!
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Call to action!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
