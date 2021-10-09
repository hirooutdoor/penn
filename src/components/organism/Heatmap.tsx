import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

interface Props {
  
}

const Heatmap = (props: Props) => {
  return (
    <>
    {/* TODO・HeatMapの表示ロジック作成=> https://codesandbox.io/s/73mk9wlyx 参考に  */}
    <CalendarHeatmap
  startDate={new Date('2021-04-01')}
  endDate={new Date('2021-12-31')}
  values={[
    { date: '2021-01-01', count: 1 },
    { date: '2021-12-22', count: 3 },
    { date: '2021-12-30', count: 4 },
    { date: '2021-04-01', count: 1 },
    { date: '2021-12-12', count: 3 },
    { date: '2021-12-10', count: 4 },
    { date: '2021-11-01', count: 1 },
    { date: '2021-11-22', count: 3 },
    { date: '2021-11-30', count: 4 },
    { date: '2021-11-01', count: 1 },
    { date: '2021-11-12', count: 3 },
    { date: '2021-11-10', count: 4 },
    { date: '2021-12-01', count: 1 },
    { date: '2021-11-12', count: 3 },
    { date: '2021-11-20', count: 4 },
    { date: '2021-08-01', count: 1 },
    { date: '2021-08-12', count: 3 },
    { date: '2021-08-10', count: 4 },
    // ...and so on
  ]}
  classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-scale-${value.count}`;
    
  }}
/>

</>
  )
}

export default Heatmap
