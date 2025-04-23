import React, { useState } from 'react';
import './Create.css';

export default function CreateEvent() {
    const [event, setEvent] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        imageFile: null,
        imagePreview: null,
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

        // Example API call
        // fetch('/api/events/create', {
        //   method: 'POST',
        //   body: formData,
        // });

        console.log('New Event Data:', event);
        alert('Event created successfully!');

        // Reset form
        setEvent({
            title: '',
            date: '',
            location: '',
            description: '',
            imageFile: null,
            imagePreview: null,
        });
    };

    return (
        <div className="create-event-container">
            <h2>Create New Event</h2>

            {event.imagePreview && (
                <div className="event-image-preview">
                    <img src={event.imagePreview} alt="Preview" />
                </div>
            )}

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

                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}
