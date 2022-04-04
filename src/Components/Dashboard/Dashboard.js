import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="container px-3 md:px-5 lg:grid grid-cols-2 gap-5">
            <div className="my-10">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line
                            type="monotone"
                            dataKey="sell"
                            stroke="rgb(234 88 12)"
                        />

                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
                <h2 className="text-center text-3xl">
                    Figure: Sells across the months
                </h2>
            </div>
            <div className="my-10">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="revenue"
                            stackId="a"
                            fill="rgb(234 88 12)"
                        />
                    </BarChart>
                </ResponsiveContainer>
                <h2 className="text-center text-3xl">
                    Figure: Revenue across the months
                </h2>
            </div>
            <div className="my-10">
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />

                        <Radar
                            name="Investment"
                            dataKey="investment"
                            stroke="rgb(234 88 12)"
                            fill="rgb(234 88 12)"
                            fillOpacity={0.6}
                        />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
                <h2 className="text-center text-3xl">
                    Figure: Investment across the months
                </h2>
            </div>
            <div className="my-10">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            dataKey="revenue"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={120}
                            fill="rgb(234 88 12)"
                            label
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
                <h2 className="text-center text-3xl">
                    Figure: Revenue across the months
                </h2>
            </div>
        </div>
    );
};

export default Dashboard;
