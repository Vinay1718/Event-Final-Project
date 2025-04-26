import React, { useState } from "react";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard({ tickets, cart, setCart }) {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [event, setEvent] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        imageFile: null,
        imagePreview: '',
    });

    const toastConfig = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        style: {
            background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 0.7))",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)",
        },
        theme: "colored",
    };

    const filteredTickets = tickets.map(ticket => {
        if (selectedTicket && ticket.id === selectedTicket.id) {
            return { ...selectedTicket };
        }
        return ticket;
    });

    const addToCart = (ticket) => {
        setCart((prevCart) => {
            const isItemInCart = prevCart.some((item) => item.id === ticket.id);
            toast.dismiss();
            if (!isItemInCart) {
                toast.success(`${ticket.name} added to cart!`, toastConfig);
                return [...prevCart, ticket];
            } else {
                toast.info(`${ticket.name} is already in cart!`, toastConfig);
                return prevCart;
            }
        });
    };

    const handleViewTicket = (ticket) => {
        setSelectedTicket(ticket);
        setIsViewModalOpen(true);
    };

    const handleEditTicket = (ticket) => {
        setSelectedTicket(ticket);
        setEvent({
            title: ticket.name || '',
            date: ticket.date || '',
            location: ticket.place || '',
            description: ticket.description || '',
            imagePreview: ticket.image || '',
        });
        setIsEditModalOpen(true);
    };

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

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const updatedTicket = {
            ...selectedTicket,
            name: event.title,
            date: event.date,
            place: event.location,
            description: event.description,
            image: event.imagePreview,
        };

        setSelectedTicket(updatedTicket);
        toast.success("Event updated successfully!", toastConfig);

        setIsEditModalOpen(false);
    };

    return (
        <>
            <ToastContainer />
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search by event or city..."
                    value={event.title}
                    onChange={(e) => setEvent({ ...event, title: e.target.value })}
                    className="search-bar"
                />
            </div>

            <div className="ticket-container">
                {filteredTickets.map((ticket) => (
                    <div key={ticket.id} className="card">
                        <img src={ticket.image} alt={ticket.name} />
                        <h2>{ticket.name}</h2>
                        <h3>{ticket.place}</h3>
                        <h3>₹{ticket.price}</h3>
                        <button onClick={() => handleViewTicket(ticket)}>View Details</button>
                        <button onClick={() => addToCart(ticket)}>Add to Cart</button>
                        <button onClick={() => handleEditTicket(ticket)}>Edit</button>
                    </div>
                ))}
            </div>

            {isViewModalOpen && selectedTicket && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setIsViewModalOpen(false)}>&times;</span>
                        <h2>View Event</h2>
                        <img src={selectedTicket.image} alt={selectedTicket.name} />
                        <h3>{selectedTicket.name}</h3>
                        <p>{selectedTicket.description}</p>
                        <p><strong>Date:</strong> {selectedTicket.date}</p>
                        <p><strong>Location:</strong> {selectedTicket.place}</p>
                        <p><strong>Price:</strong> ₹{selectedTicket.price}</p>
                    </div>
                </div>
            )}

            {isEditModalOpen && selectedTicket && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setIsEditModalOpen(false)}>&times;</span>
                        <h2>Edit Event</h2>
                        <form onSubmit={handleSubmitEdit} encType="multipart/form-data">
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
                                />
                            </label>

                            <button type="submit">Update Event</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
