
import'../../styles/piechart.css'
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function PieChart(props) {
    // Référence à l'élément SVG
    const chartRef = useRef(null);

    
    const color = ["#E60000", "#ffffff"]; 

    useEffect(() => {
        // dimensions du graphique
        const data = props.todayScore;
        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) ;

        //  fonction pie pour convertir les données en angles
        const pie = d3.pie()
            .value(d => d.value)
            .startAngle(0) 
            .endAngle(Math.PI * 2) 

       
            const arc = d3.arc()
            .innerRadius(80) // up
            .outerRadius(90) //  down
            .cornerRadius(50); // side

        //position
        const svg = d3.select(chartRef.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        //data
        const arcs = svg.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g");

        
        arcs.append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color[i]); 

    }, [props.todayScore]);

    return (
        <div className='pieChart'>
            <h3 className='pieChart__title'>Score</h3>
            <svg ref={chartRef}></svg>
            <p className='pieChart__text'><span className='pieChart__text__big'>{props.todayScore[0].value}%</span> <br /> de votre objectif</p>
        </div>
    );
}
