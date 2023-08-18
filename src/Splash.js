import * as React from "react";
import { Link } from "react-router-dom";
import './font.css';
import './style.css';

function Splash() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>꿀통</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="./style.css" type="text/css" rel="stylesheet" />
        </head>
        <body style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}>
          <link rel="stylesheet" href="./font.css" />
          <div className="row">
            <div className="col-xs-6">
            <section className="section">
          <div className="container d-flex h-100 align-items-center justify-content-center vh-100"> {/* Add container and Flex classes */}
              <div className="splash-content text-center">
                <h1>허니 보틀 스플래시 화면입니다</h1>
                <div className="d-flex justify-content-between"> {/* Use d-flex and justify-content-between */}
                  <Link to="/Login">
                    <button className="btn btn-primary me-3">로그인</button>
                  </Link>
                  <button className="btn btn-primary me-3">회원가입</button>
                  <Link to="/Main">
                    <button className="btn btn-primary me-3">게시판</button>
                  </Link>
                  <Link to="/Admin">
                    <button className="btn btn-primary me-3">관리자 모드</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
            </div>
            
          </div>
          
        </body>
      </html>
    </>
  );
}

export default Splash;
