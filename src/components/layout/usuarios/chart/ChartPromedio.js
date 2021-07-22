import React, { useEffect } from 'react';
import { Doughnut  } from 'react-chartjs-2';
import { getChartPromedio,setLoading } from '../../../../actions/ChartActions';
import { useDispatch, useSelector } from 'react-redux';
import Progress from '../../progress/Progress';



const ChartPromedio = () => {
    const dispatch = useDispatch();
    const { superheroes } = useSelector(state => state.SuperheroeReducer);
    const {  loading, chartPromedioData, chartPromedioLabel } = useSelector(state => state.ChartReducer);
   

    useEffect(() => {
        dispatch(setLoading);
        dispatch(getChartPromedio(superheroes));
    }, []);

    if (loading) {
        return (
          <Progress />
        );
      }
    

    const data = {
        labels: chartPromedioLabel,
        datasets: [
            {
                label: 'Powerstats',
                data: chartPromedioData,
                backgroundColor: [
                    'rgb(63,81,181)',
                    'rgba(171,235,198)',
                  
                ],
                borderColor: [
                    'rgb(63,81,181)',
                    'rgba(171,235,198)',
                ],
                borderWidth: 2,
            },
        ],
    }
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (
        <>
            <Doughnut 
                data={data}
                options={options}
                width={400}
                height={350}
            />
        </>

    );
};

export default ChartPromedio;