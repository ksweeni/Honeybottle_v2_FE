import React from 'react';
import { useLocation } from 'react-router-dom';
import './information.css';
import Container from "./Container";
import SideBar from "./SideBar";

function Information() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const goBack = () => {
    window.history.back();
  };

  if (!data) {
    return <div>데이터가 로딩중입니다...</div>;
  }

  return (
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>꿀통</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet" />
        <link href='./style.css' type="text/css" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}>
        <link rel="stylesheet" href='./font.css' />
        <section className="section">
          <Container />
          <div className="candidate-list">
            <SideBar title={"세부페이지"} />
            <div className="col-lg-8">
              {/* Post content */}
              <article>
                {/* Post header */}
                <header className="mb-4 mt-3">
                  {/* Post title */}
                  <h1 className="fw-bolder mb-1">{data.title}!</h1>
                  {/* Post meta content */}
                  <div className="text-muted fst-italic mb-2">{data.address}</div>
                  {/* Post categories */}
                  {/*<a className="badge bg-secondary text-decoration-none link-light" href="#!">체험</a>
              <a className="badge bg-secondary text-decoration-none link-light" href="#!">먹거리</a>*/}
                </header>
                {/* 이미지 */}
                <figure className="mb-4">
                  {/*<img className="img-fluid rounded" src={'./skywork.JPG'} />*/}
                  <a href={data.mapUrl}>
                    <img src={data.imageUrl} className="card-img" alt="..." />
                  </a>
                </figure>


                {/* Post content */}
                <section className="mb-5">
                  <p className="fs-5 mb-4">{data.content}</p>
                </section>
              </article>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-primary square-img" style={{ width: '250px' }} onClick={goBack}>뒤로가기</button>
              </div>
            </div>
            

          </div>
        </section>
        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></script>
        <script type="text/javascript"></script>
      </body>
    </html>
  );
}

export default Information;
