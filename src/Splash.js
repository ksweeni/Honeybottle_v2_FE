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
                <h1 className='splash-title'>박주가리</h1>
                <h2 className='splash-subtitle'>고운 긴 솜털이 바람에 날려 씨앗을 퍼뜨려 🌸먼 여행🌸을 떠납니다.</h2>
                <div className="d-flex justify-content-between"> {/* Use d-flex and justify-content-between */}
                  <Link to="/Main">
                    <button className="btn btn-primary me-3">바로가기</button>
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
