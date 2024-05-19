import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts'
import'../../styles/linechart.css'
export default function lineChart(props) {
    const data = props.timesSessions
    const extendedData = [
        {
            day: 0,
            sessionLength: data[0].sessionLength
        },
        ...data,
        {
            day: 8,
            sessionLength: data[6].sessionLength
        },
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="lineChart__label">
                    <p className="lineChart__label__time">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='lineChart'>
            <h3 className='lineChart__title'>Durée moyenne des sessions</h3>
            <div className='lineChart__chart'>
                <LineChart width={300} height={175} data={extendedData} >
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#ffffff' }}
                        opacity={0.5}
                    />
                    <YAxis domain={[-5]} hide />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} activeDot={{ r: 7, stroke: "rgba(255,255,255,0.2)", strokeWidth: 16 }} />
                </LineChart>
            </div>

            <div className='lineChart__opacity'></div>
        </div>

    )
}