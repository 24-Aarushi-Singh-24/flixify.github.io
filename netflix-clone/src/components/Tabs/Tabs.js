import React from "react";
import { tabLabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";
function Tabs({ activeTabName, onClickTab }) {
  const { CANCEL_AT_ANY_TIME, PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );

  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PRICE,
            activeTabName === PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>

      {activeTabName === CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide Netflix isn't for you - no problem. No
                    commitment. Cancel Online anytime.
                  </p>
                  <Link to="/netflix-show" className="btn-t btn-lg">
                    Watch Free For 30 Days
                  </Link>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTabName === WATCH_ANYWHERE && (
        <section classname="tab-content">
          <div class="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV shows and movies anytime, anywhere — personalized for
                  you.
                </p>
                <Link to="/netflix-show" className="btn-t btn-lg">
                    Watch Free For 30 Days
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
							<p class="text-md">
								Watch on your TV
							</p>
							<p class="text-dark">
								Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
								players and more.
							</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
							<p class="text-md">
								Watch instantly or download for later
							</p>
							<p class="text-dark">
								Available on phone and tablet, wherever you go.
							</p>
                </div>
                <div>
							<img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
							<p class="text-md">
								Use any computer
							</p>
							<p class="text-dark">
								Watch right on Netflix.com.
							</p>
						</div>
                </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PRICE && (
        <section className="tab-content">
            <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PRICE && "show"
              }`}
            >
                <div className="text-center">
                    <p className="text-lg">
                    Choose one plan and watch everything on Netflix.
                    </p>
                    <Link to="/netflix-show" className="btn-t btn-lg">Watch Free For 30 Days </Link>
                </div>
                <table class="table">
						<thead>
							<tr>
								<th></th>
								<th>Basic</th>
								<th>Standard</th>
								<th>Premium</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Monthly price after free month ends on 6/19/19</td>
								<td>$8.99</td>
								<td>$12.99</td>
								<td>$15.99</td>
							</tr>
							<tr>
								<td>HD Available</td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Ultra HD Available</td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-times"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Screens you can watch on at the same time</td>
								<td>1</td>
								<td>2</td>
								<td>4</td>
							</tr>
							<tr>
								<td>Watch on your laptop, TV, phone and tablet</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Unlimited movies and TV shows</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Cancel anytime</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>First month free</td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
								<td><i class="fas fa-check"></i></td>
							</tr>
						</tbody>
					</table>
            </div>
            </div>
        </section>
      )}
      

      
    </>
  );
}

export default Tabs;
