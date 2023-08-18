import * as React from "react";
import { useNavigate } from "react-router-dom";
import '../font.css';
import '../style.css';

function Container() {
    const navigate = useNavigate();

    function goEat(){
        console.log('go to Eat');
        navigate('/Eat');
    }

    function goPlace () {
        console.log('Place');
        navigate('/Place');
    }

    function goActivity() {
        console.log('Activity');
        navigate('/Activity');
    }

    return (
        <div className="container">
              <div className="justify-content-center row">
                <div className="col-lg-12">
                  <div className="candidate-list-widgets mb-4">
                    <form action="#" className="">
                      <div className="g-2 row">
                        <div className="align-items-center row">
                          <div className="col-lg-8">
                            <div className="city-layout">
                              <h4 className="cityname">🌸박주가리</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="division-line"></div>
                      <div className="button-group">
                        <button id="category-button" onClick={goActivity}>
                          체험
                        </button>
                        <button id="category-button" onClick={goEat}>
                          먹거리
                        </button>
                        <button id="category-button" onClick={goPlace}>
                          명소
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )

};

export default Container;