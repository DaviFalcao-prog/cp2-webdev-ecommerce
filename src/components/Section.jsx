export default function Section({titulo, children}) {
    return (
        <div className="mb-12">
            <h2 className="text-2x1 font-bold mb-6">{titulo}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-75 sm:gap-6">
                {children}
            </div>
        </div>
    )
}