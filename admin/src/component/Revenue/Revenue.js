import React, { useState } from 'react';
import './Revenue.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

const initialData = [
    { month: 'Jan', revenue: 12000, expense: 3000 },
    { month: 'Feb', revenue: 18000, expense: 4000 },
    { month: 'Mar', revenue: 15000, expense: 3500 },
    { month: 'Apr', revenue: 21000, expense: 5000 },
    { month: 'May', revenue: 24000, expense: 5500 },
    { month: 'Jun', revenue: 20000, expense: 4500 },
];

export default function Revenue() {
    const [revenueData, setRevenueData] = useState(initialData);

    const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
    const totalExpenses = revenueData.reduce((sum, item) => sum + item.expense, 0);
    const totalProfit = totalRevenue - totalExpenses;

    const handleExpenseChange = (e, idx) => {
        const updated = [...revenueData];
        updated[idx].expense = parseInt(e.target.value) || 0;
        setRevenueData(updated);
    };

    return (
        <div className="revenue-container">
            <h2>Monthly Revenue & Expenses</h2>

            <div className="top-summary">
                <div className="summary-card revenue">
                    <h4>Total Revenue</h4>
                    <p>₹{totalRevenue.toLocaleString()}</p>
                </div>
                <div className="summary-card expenses">
                    <h4>Total Expenses</h4>
                    <p>₹{totalExpenses.toLocaleString()}</p>
                </div>
                <div className="summary-card profit">
                    <h4>Total Profit</h4>
                    <p>₹{totalProfit.toLocaleString()}</p>
                </div>
            </div>

            <div className="revenue-chart">
                <h3>Revenue vs Expenses</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#d9534f" name="Revenue" />
                        <Bar dataKey="expense" fill="#5bc0de" name="Expenses" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="revenue-table">
                <h3>Monthly Breakdown</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Revenue (₹)</th>
                            <th>Expense (₹)</th>
                            <th>Profit (₹)</th>
                            <th>Update Expense</th>
                        </tr>
                    </thead>
                    <tbody>
                        {revenueData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.month}</td>
                                <td>₹{item.revenue.toLocaleString()}</td>
                                <td>₹{item.expense.toLocaleString()}</td>
                                <td>₹{(item.revenue - item.expense).toLocaleString()}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="0"
                                        value={item.expense}
                                        onChange={(e) => handleExpenseChange(e, idx)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
