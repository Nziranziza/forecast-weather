import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@material-ui/core";
import createForecastData from "utils/createForecastData";
import moment from "moment";
import kelvinToCelcius from "utils/kelvinToCelcius";
import formatWindSpeed from "utils/formatWindSpeed";
import formatTemperature from "utils/formatTemperature";
import { groupBy, keys } from "lodash";
import Button from "components/Button";
import "components/Forecast/index.scss";

const Forecast = () => {
  const {
    data: { list },
    loading,
  } = useSelector((state) => state.forecast);
  const [selectedDate, setSelectedDate] = useState("");
  const [groupedData, setGroupedData] = useState({});

  const formattedData = (data) =>
    data.map(({ dt_txt, main, wind, weather }) =>
      createForecastData(
        moment(dt_txt).format("DD MMM hA"),
        formatTemperature(kelvinToCelcius(main.temp)),
        formatTemperature(kelvinToCelcius(main.temp_min)),
        formatTemperature(kelvinToCelcius(main.temp_max)),
        formatWindSpeed(wind.speed),
        weather[0].description
      )
    );

  useEffect(() => {
    const groupByDate = groupBy(list, (data) =>
      moment(data.dt_txt).format("DD MMM")
    );
    setGroupedData(groupByDate);
    setSelectedDate(keys(groupByDate)[0]);
  }, [list]);

  const onSelectDate = (date) => {
    setSelectedDate(date)
  }

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">Min Temp</TableCell>
              <TableCell align="right">Max Temp</TableCell>
              <TableCell align="right">Wind</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <CircularProgress />
            ) : (
              groupedData[selectedDate] &&
              formattedData(groupedData[selectedDate]).map((row) => (
                <TableRow key={row.date}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align="right">{row.temp}</TableCell>
                  <TableCell align="right">{row.minTemp}</TableCell>
                  <TableCell align="right">{row.maxTemp}</TableCell>
                  <TableCell align="right">{row.wind}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="button-list">
        {keys(groupedData).map((date) => {
          const formattedDate = moment(date).format("DD MMM");
          return (
            <Button 
            onClick={() => onSelectDate(formattedDate) } 
            disabled={selectedDate === formattedDate} 
            color="primary">
              {formattedDate}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
