import React from 'react';
import { Link } from "react-router-dom";
import '../../font.css';
import './admin.css';

function Admin() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>관리자 모드</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="./style.css" type="text/css" rel="stylesheet" />
        </head>
        <body className="login-body">
          <section className="section">
            
          <div className="container">
              <div className="justify-content-center row">
                <div className="col-lg-12">
                  <div className="candidate-list-widgets mb-4">
                      <div className="g-2 row">
                        <div className="align-items-center row">
                          <div className="col-lg-8">
                            <div className="city-layout">
                              <h4 className="cityname">HoneyBottle</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="login-container">
              <h1 className="login-title">관리자 인증</h1>
              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="username"></label>
                  <input type="text" id="username" className="form-control" placeholder='관리자 코드를 입력하세요' />
                </div>
                <Link to="/Main"><button type="submit" className="btn btn-primary">관리자 인증</button></Link>
              </form>
            </div>
          </section>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            crossOrigin="anonymous"
          ></script>
          <script type="text/javascript"></script>
        </body>
      </html>
    </>
  );
}

export default Admin;