import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Components/UseAuth/UseAuth";
import UseAxiosSecure from "../../../Components/UseAuth/UseAxiosSecure";
import { FaDollarSign, FaUserAlt, FaUtensils } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];



const AdminHome = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()


    // now we load the data through the tanstack query
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stats`);
            return res.data;
        }
    })



    //individually data load 

    const { data: chartData = {} } = useQuery({
        queryKey: ['order-stats',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order-stats`);
            return res.data;
        }
    })



    //custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //custom shape for the pie chart


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChart = chartData.map(data => {
        return { name: data.category, value: data.Revenue }
    })



    return (
        <div>
            <h1 className="text-4xl font-bold"> Hi! Welcome to Admin Home</h1>
            {/* <div>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-6 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                    <div className="text-3xl mb-2">
                        <FaDollarSign />
                    </div>
                    <div className="text-lg">Revenue</div>
                    <div className="text-2xl font-bold">{stats.revenue}</div>
                </div>

                <div className="p-6 rounded-xl text-white bg-gradient-to-r from-yellow-400 to-yellow-200 shadow-md">
                    <div className="text-3xl mb-2">
                        <FaUserAlt />
                    </div>
                    <div className="text-lg">Users</div>
                    <div className="text-2xl font-bold">{stats.users}</div>
                </div>

                <div className="p-6 rounded-xl text-white bg-gradient-to-r from-pink-400 to-pink-200 shadow-md">
                    <div className="text-3xl mb-2">
                        <FaUtensils />
                    </div>
                    <div className="text-lg">Menu Item</div>
                    <div className="text-2xl font-bold">{stats.menuItems}</div>
                </div>

                <div className="p-6 rounded-xl text-white bg-gradient-to-r from-blue-400 to-blue-200 shadow-md">
                    <div className="text-3xl mb-2">
                        <FaBook />
                    </div>
                    <div className="text-lg">Orders</div>
                    <div className="text-2xl font-bold">{stats.orders}</div>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2"></div>
                <PieChart width={300} height={300}>
                 
                    <Pie
                        data={pieChart}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChart.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div>

        </div>
    );
};

export default AdminHome;
