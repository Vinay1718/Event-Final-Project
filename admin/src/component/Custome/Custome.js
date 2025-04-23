import React, { useState } from 'react';
import './Custome.css';

export default function EventUpdate() {
    const defaultEvent = {
        title: '',
        date: '',
        location: '',
        description: '',
        imageFile: null,
        imagePreview: 'https://source.unsplash.com/800x400/?concert,event',
    };

    const [event, setEvent] = useState({
        ...defaultEvent,
        title: 'Summer Music Fest 2025',
        date: '2025-06-15',
        location: 'Mumbai, India',
        description: 'An unforgettable night of music, lights, and dancing under the stars.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEvent((prev) => ({
                ...prev,
                imageFile: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', event.title);
        formData.append('date', event.date);
        formData.append('location', event.location);
        formData.append('description', event.description);
        formData.append('image', event.imageFile);

        // Example API call:
        // fetch('/api/events/update', {
        //   method: 'POST',
        //   body: formData,
        // });

        console.log('Updated Event Data:', event);
        alert('Event updated successfully!');

        // Clear form
        setEvent(defaultEvent);
    };

    return (
        <div className="event-update-container">
            <h2>Edit Event</h2>

            <div className="event-preview">
                <img src={event.imagePreview} alt="Event" />
                <div className="event-info">
                    <h3>{event.title || 'Event Title'}</h3>
                    <p><strong>Date:</strong> {event.date || 'YYYY-MM-DD'}</p>
                    <p><strong>Location:</strong> {event.location || 'Event Location'}</p>
                    <p><strong>Description:</strong> {event.description || 'Event Description'}</p>
                </div>
            </div>

            <form className="event-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        rows="4"
                        value={event.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>

                <label>
                    Upload Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </label>

                <button type="submit">Update Event</button>
            </form>
        </div>
    );
}
