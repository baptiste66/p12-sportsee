import '../../styles/radarchart.css'

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts'

export default function radarChart(props) {
    const data = props.performance
    
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="radarCustom-tooltip">
                    <p className="label">{`${payload[0].value}`}</p>
                </div>
            );
        }
      
        return null;
    };
    
    return (
        <div className='radarChart'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={80} width={300} height={300} data={data}>
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} />
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
                    <Tooltip content={<CustomTooltip />} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
