

const Title = ({ title, handleSteps }) => {
    return (
        <div className="steps">
            <h2>{title}</h2>
            <button onClick={handleSteps}>
                Continuar
            </button>
        </div>
    );
}

export default Title;