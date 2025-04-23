import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    isPremium: true,
    eventsBooked: 12,
    upcomingEvents: 5,
    bio: 'Event enthusiast, love networking and attending tech conferences.',
    subscriptionStart: '2024-12-01',
    recentActivities: [
      '🎟️ Booked "Startup Summit 2025"',
      '🤝 Joined "AI Meetup Bangalore"',
      '💎 Subscribed to Premium Plan',
    ],
  };

  return (
    <div className="profile-layout">
      {/* Left Section */}
      <div className="side-section left-section">
        <h3>Quick Links</h3>
        <ul>
          <li>🔖 My Bookings</li>
          <li>🎯 Suggested Events</li>
          <li>👥 Invite Friends</li>
          <li>💬 Messages</li>
        </ul>

        <h4>Interests</h4>
        <div className="interests">
          <span>Tech</span>
          <span>Music</span>
          <span>Startups</span>
          <span>AI</span>
        </div>
      </div>

      {/* Center Profile Card */}
      <div className="profile-card">
        <img className="profile-avatar" src={user.avatar} alt="User Avatar" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>

        {user.isPremium && <span className="premium-badge">🌟 Premium Member</span>}

        <p className="profile-bio">“{user.bio}”</p>

        <div className="profile-stats">
          <div className="stat">
            <p className="stat-value">{user.eventsBooked}</p>
            <p className="stat-label">Events Booked</p>
          </div>
          <div className="stat">
            <p className="stat-value">{user.upcomingEvents}</p>
            <p className="stat-label">Upcoming</p>
          </div>
        </div>

        <div className="profile-section">
          <h4>🔐 Subscription Info</h4>
          <p><strong>Started:</strong> {user.subscriptionStart}</p>
          <p><strong>Status:</strong> <span className="status-active">Active</span></p>
        </div>

        <div className="profile-section">
          <h4>🕒 Recent Activity</h4>
          <ul>
            {user.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        <div className="button-group">
          <button className="edit-button">✏️ Edit Profile</button>
          <button className="settings-button">⚙️ Settings</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="side-section right-section">
        <h3>Notifications</h3>
        <ul>
          <li>📣 New event near you: "TechX 2025"</li>
          <li>🔔 Reminder: "AI Meetup" tomorrow</li>
        </ul>

        <h4>Achievements</h4>
        <div className="badges">
          <span>🎖️ Top Booker</span>
          <span>💎 Premium Member</span>  
          <span>🎯 Consistent Attendee</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
