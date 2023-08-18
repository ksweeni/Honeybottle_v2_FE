import React from "react";
import { Link } from "react-router-dom";
import "./font.css";
import "./style.css";

function Main() {
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
        <body style={{ backgroundColor: "rgba(244, 243, 250, 1)" }}>
          <link rel="stylesheet" href="./font.css" />
          <div className="container">
            <p className="text-center fs-1 mb-4 text-primary p-5">메뉴선택</p>
            <div className="row justify-content-center p-5">
              <div className="col-sm-4 text-center">
                <Link to="/Activity">
                  <img
                    className="w-75 rounded shadow mb-3 img-hover"
                    src={process.env.PUBLIC_URL + "/activityImg.jpg"}
                    alt="Activity"
                  />  
                </Link>
                <p className="mb-0 fs-1">체험</p>
              </div>
              <div className="col-sm-4 text-center">
                <Link to="/Eat">
                  <img
                    className="w-75 rounded shadow mb-3 img-hover"
                    src={process.env.PUBLIC_URL + "/eatImg.jpg"}
                    alt="Eat"
                  />
                </Link>
                  <p className="mb-0 fs-1">먹거리</p>
              </div>
              <div className="col-sm-4 text-center">
                <Link to="/Place">
                  <img
                    className="w-75 rounded shadow mb-3 img-hover"
                    src={process.env.PUBLIC_URL + "/placeImg.jpg"}
                    alt="Place"
                  />
                </Link>
                  <p className="mb-0 fs-1">명소</p>
              </div>
            </div>
          </div>

          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
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

export default Main;
