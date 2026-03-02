import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function AddEntryForm({ onAdd, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        country: '',
        dates: '',
        text: '',
        img: {
            src: '',
            alt: ''
        },
        googleMapsLink: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name.includes('img')) {
            const field = name.split('.')[1]
            setFormData(prev => ({
                ...prev,
                img: { ...prev.img, [field]: value }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.title && formData.country && formData.dates && formData.text) {
            onAdd({
                id: Date.now(),
                ...formData
            })
            setFormData({
                title: '',
                country: '',
                dates: '',
                text: '',
                img: { src: '', alt: '' },
                googleMapsLink: ''
            })
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Add New Entry</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g., Eiffel Tower"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="e.g., France"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Dates</label>
                        <input
                            type="text"
                            name="dates"
                            value={formData.dates}
                            onChange={handleChange}
                            placeholder="e.g., 01 Jan, 2024 - 05 Jan, 2024"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Image URL</label>
                        <input
                            type="url"
                            name="img.src"
                            value={formData.img.src}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Image Alt Text</label>
                        <input
                            type="text"
                            name="img.alt"
                            value={formData.img.alt}
                            onChange={handleChange}
                            placeholder="e.g., Eiffel Tower"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Google Maps Link</label>
                        <input
                            type="url"
                            name="googleMapsLink"
                            value={formData.googleMapsLink}
                            onChange={handleChange}
                            placeholder="https://maps.app.goo.gl/..."
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            placeholder="Write about your experience..."
                            className="w-full border rounded px-3 py-2 h-24 resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-400 text-white py-2 rounded hover:bg-red-500 flex items-center justify-center gap-2"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        Add Entry
                    </button>
                </form>
            </div>
        </div>
    )
}
