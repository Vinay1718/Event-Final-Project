import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

export default function Settings() {
    const navigate = useNavigate();

    return (
        <div className="settings-container">
            <h2>Admin Settings</h2>
            <p className="settings-subtext">Manage platform settings and administrative tools.</p>

            <div className="settings-cards">

                {/* User Management */}
                <div className="settings-card" onClick={() => navigate('/admin/users')}>
                    <i className="fas fa-users-cog"></i>
                    <h3>User Management</h3>
                    <p>View, edit, or delete users and assign roles.</p>
                </div>

                {/* Content Moderation */}
                <div className="settings-card" onClick={() => navigate('/admin/content')}>
                    <i className="fas fa-shield-alt"></i>
                    <h3>Content Moderation</h3>
                    <p>Review and manage reported content.</p>
                </div>

                {/* System Logs */}
                <div className="settings-card" onClick={() => navigate('/admin/logs')}>
                    <i className="fas fa-clipboard-list"></i>
                    <h3>System Logs</h3>
                    <p>Monitor platform activity and system logs.</p>
                </div>

                {/* Analytics */}
                <div className="settings-card" onClick={() => navigate('/admin/analytics')}>
                    <i className="fas fa-chart-line"></i>
                    <h3>Analytics</h3>
                    <p>View usage statistics and performance data.</p>
                </div>

                {/* Payment Settings */}
                <div className="settings-card" onClick={() => navigate('/admin/payments')}>
                    <i className="fas fa-credit-card"></i>
                    <h3>Payment Settings</h3>
                    <p>Configure payment methods and transactions.</p>
                </div>

                {/* Roles and Permissions */}
                <div className="settings-card" onClick={() => navigate('/admin/roles')}>
                    <i className="fas fa-user-shield"></i>
                    <h3>Roles & Permissions</h3>
                    <p>Set roles and permissions for users.</p>
                </div>

                {/* App Config (Coming Soon) */}
                <div className="settings-card disabled-card">
                    <i className="fas fa-cogs"></i>
                    <h3>App Configuration</h3>
                    <p>Manage backend configurations (Coming Soon).</p>
                </div>

                {/* Backup & Restore (Coming Soon) */}
                <div className="settings-card disabled-card">
                    <i className="fas fa-database"></i>
                    <h3>Backup & Restore</h3>
                    <p>Data backup and recovery tools (Coming Soon).</p>
                </div>

                {/* Notification Settings */}
                <div className="settings-card disabled-card">
                    <i className="fas fa-bell"></i>
                    <h3>Notification Settings</h3>
                    <p>Manage system notifications (Coming Soon).</p>
                </div>

            </div>
        </div>
    );
}
