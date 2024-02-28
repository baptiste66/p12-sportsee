import '../styles/error.css'

export default function Error({ buttonMock }) {

    return (
        <div className="error">
            <h2 className="error__title">404 Not Found</h2>
            <button onClick={buttonMock} className="error__link">Utilisez les données mock</button>
        </div>
    )
}