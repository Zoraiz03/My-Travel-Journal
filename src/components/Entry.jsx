import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Entry(props) {
    return (
        <article className="flex gap-6 p-10 hover:bg-gray-50 transition group">

            <img 
                className="w-64 h-85 object-cover rounded-lg flex-shrink-0"
                src={props.img.src} 
                alt={props.img.alt} 
            />

            <div>

                <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon 
                        icon={faLocationDot} 
                        className="text-red-500"
                    />
                    
                    <span className="tracking-widest">
                        {props.country.toUpperCase()}
                    </span>

                    <a 
                        href={props.googleMapsLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 underline"
                    >
                        View on Google Maps
                    </a>
                </div>

                <h2 className="text-2xl font-bold mt-3">
                    {props.title}
                </h2>

                <p className="text-gray-600 mt-2">
                    {props.dates}
                </p>

                <p className="mt-4 max-w-xl">
                    {props.text}
                </p>

                <button
                    onClick={() => props.onDelete(props.id)}
                    className="mt-4 text-red-400 hover:text-red-600 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition"
                    title="Delete this entry"
                >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                </button>

            </div>

        </article>
    )
}