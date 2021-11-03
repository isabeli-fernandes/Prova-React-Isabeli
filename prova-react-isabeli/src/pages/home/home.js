import React from "react";
import Breadcrumb from "../../components/micro/breadcrumb/breadcrumb";
import WelcomeMsg from "../../components/micro/welcome/welcome";
import statisticCard from "../../components/macro/statisticCard/statisticCard";
import ChartCard from "../../components/macro/chartCard/chartCard";

function Home(props) {
  return (
    <>
      {/* <!-- main content start --> */}
      <div className="main-content">
        {/* <!-- content --> */}
        <div className="container-fluid content-top-gap">
          <Breadcrumb currentPage="Dashboard" />
          <WelcomeMsg name="Isabeli" />

          {/* <!-- statistic data --> */}
          <div className="statistic">
            <div className="row">
              <div className="col-xl-6 pr-xl-2">
                <div className="row">
                  <statisticCard
                    icon="user"
                    color="primary"
                    number="29.75 M"
                    text="Total Users"
                  />
                  <statisticCard
                    icon="eye"
                    color="secondary"
                    number="51.25 K"
                    text="Daily Visitors"
                  />
                </div>
              </div>
              <div className="col-xl-6 pl-xl-2">
                <div className="row">
                  <statisticCard
                    icon="cloud"
                    color="success"
                    number="166.89 M"
                    text="Downloads"
                  />
                  <statisticCard
                    icon="cart"
                    color="danger"
                    number="1,250k"
                    text="Purchased"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- //statistic data --> */}

          {/* <!-- charts --> */}
          <div className="chart">
            <div className="row">
              <ChartCard
                chart="barchart"
                header="Bar Chart"
                footer="Updated 2 hours ago"
              />
              <ChartCard
                chart="linechart"
                header="Line Chart"
                footer="Updated just now"
              />
            </div>
          </div>
          {/* <!-- //charts --> */}
        </div>
        {/* <!-- //content --> */}
      </div>
      {/* <!-- main content end--> */}
    </>
  );
}

export default Home;