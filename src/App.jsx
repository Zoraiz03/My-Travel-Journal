import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/header"
import Entry from "./components/Entry"
import AddEntryForm from "./components/AddEntryForm"
import defaultData from "./components/data"

export default function App() {
    const [entries, setEntries] = useState([])
    const [showForm, setShowForm] = useState(false)

    // Load entries from localStorage on mount
    useEffect(() => {
        const savedEntries = localStorage.getItem('travelEntries')
        if (savedEntries) {
            setEntries(JSON.parse(savedEntries))
        } else {
            setEntries(defaultData)
        }
    }, [])

    // Save entries to localStorage whenever they change
    useEffect(() => {
        if (entries.length > 0) {
            localStorage.setItem('travelEntries', JSON.stringify(entries))
        }
    }, [entries])

    const handleAddEntry = (newEntry) => {
        setEntries(prev => [newEntry, ...prev])
    }

    const handleDeleteEntry = (id) => {
        setEntries(prev => prev.filter(entry => entry.id !== id))
    }

    const entryElements = entries.map((entry) => {
        return (
            <Entry 
                key={entry.id}
                id={entry.id}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
                onDelete={handleDeleteEntry}
            />
        )
    })


    return (
        <>
            <Header />
            
            <main className="max-w-4xl mx-auto">
                <button
                    onClick={() => setShowForm(true)}
                    className="fixed bottom-8 right-8 bg-red-400 text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition flex items-center gap-2 z-40"
                    title="Add new travel entry"
                >
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                    <span className="hidden sm:inline">Add Entry</span>
                </button>

                {showForm && (
                    <AddEntryForm 
                        onAdd={handleAddEntry}
                        onClose={() => setShowForm(false)}
                    />
                )}

                <div className="divide-y">
                    {entryElements.length > 0 ? entryElements : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No travel entries yet. Start by adding your first adventure!</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}