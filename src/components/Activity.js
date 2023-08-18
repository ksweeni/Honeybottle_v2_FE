import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../font.css';
import '../style.css';
import MainCard from "./MainCard";
import Container from "./Container";
import SideBar from "./SideBar";


const ITEMS_PER_PAGE = 4; // 한 페이지당 4개 게시물
const TOTAL_ITEMS = 20; // 총 항목 개수 일부러 지정해 둠

function Activity() {
  
  const [ data, setData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://52.62.142.249:4000/Activity', {
        params: {
          _limit: TOTAL_ITEMS, // 총 항목 개수를 지정합니다.
        },
      });
      setData(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  //const totalItems = data.length;
  const totalItems = TOTAL_ITEMS;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const navigate = useNavigate();

  // Information에 넘길 데이터를 추출
  const extractDataForInformation = (item) => {
    return {
      title: item.title,
      address: item.address,
      imageUrl: item.url,
      content: item.content,
      mapUrl: item.mapUrl,
      state: item.state
    };
  };


  return (
    <>
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
              <SideBar title={"체험"}/>

              <div className="col-lg-8">
              <div className="candidate-list-group">
                {/* <MainCard key={0} title={'통영마을'} address={'서울특별시 노원구 어쩌구'} imageurl={'./skywork.JPG'} /> */}

                {displayedData.map((item) => (
                  // onClick 이벤트를 사용하여 정보 페이지로 이동하도록 
                <div key={item.id} className="card-link" onClick={() => navigate(`/information/${encodeURIComponent(item.title)}`, { state: extractDataForInformation(item) })}>
                  <MainCard title={item.title} address={item.address} imageUrl={item.url} />
                </div>
              ))}
                  
              </div>

                {/* 페이지 네비게이션 */}
                <div className="row">
                  <div className="mt-4 pt-2 col-lg-12">
                    <nav aria-label="Page navigation example">
                      <div className="pagination job-pagination mb-0 justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            tabIndex="-1"
                            onClick={() => onPageChange(currentPage - 1)}
                          >
                            <i className="mdi mdi-chevron-double-left fs-15"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => onPageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                          >
                            <i className="mdi mdi-chevron-double-right fs-15"></i>
                          </button>
                        </li>
                      </div>
                    </nav>
                  </div>
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
    </>
  );
}

export default Activity;