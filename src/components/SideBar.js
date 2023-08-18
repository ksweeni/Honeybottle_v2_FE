import * as React from "react";
import '../font.css';
import '../style.css';

function SideBar({title}) {
    return (
        <div className="col-lg-4">
                <div className="container bootstrap snippets bootdey">
                  <div
                    className="row"
                    style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}
                  >
                    <div className="nav-logo-layout">
                      <a className="nav-logo" href="#">
                        🍯 {title}
                      </a>
                    </div>
                    <nav className="list-group">
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>서울
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>경기
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>강원
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>충북
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>충남
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>경북
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>경남
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>전북
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>전남
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>제주
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
    )

};

export default SideBar;