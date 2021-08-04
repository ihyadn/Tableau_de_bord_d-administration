import "./home.css"
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo.js'
import Chart from '../../components/chart/Chart'
import {userData} from '../../DummyData'
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
export default function Home() {
    return (
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    );
}
