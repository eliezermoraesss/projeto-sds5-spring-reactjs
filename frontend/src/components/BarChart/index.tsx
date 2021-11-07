import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/request';

type SeriesData = {
    name: string;
    data: number[];
}

type CharData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setCharData] = useState<CharData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then(response => {
            const data = response.data as SaleSucess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));

            setCharData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries              
                    }
                ]
            });
        });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart 
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
  }
  
  export default BarChart;