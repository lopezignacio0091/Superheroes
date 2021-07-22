import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getChart,setLoading } from '../../../../actions/ChartActions';
import { useDispatch, useSelector } from 'react-redux';
import Progress from '../../progress/Progress';



const Sales = () => {
    const dispatch = useDispatch();
    const { superheroes } = useSelector(state => state.SuperheroeReducer);
    const {  loading, charData, chartLabels } = useSelector(state => state.ChartReducer);
   

    useEffect(() => {
        dispatch(setLoading);
        dispatch(getChart(superheroes));
    }, []);

    if (loading) {
        return (
          <Progress />
        );
      }
    

    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Powerstats',
                data: charData,
                backgroundColor: [
                    'rgb(63,81,181)',
                    'rgba(171,235,198)',
                    'rgb(206,206,206)',
                    'rgb(245,0,87)',
                ],
                borderColor: [
                    'rgb(63,81,181)',
                    'rgba(171,235,198)',
                    'rgb(206,206,206)',
                    'rgb(245,0,87)',
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
            <Bar
                data={data}
                options={options}
                width={400}
                height={350}
            />
        </>

    );
};

export default Sales