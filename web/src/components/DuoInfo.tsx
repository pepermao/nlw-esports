const DuoInfo = ({ label, value, ...props }) => {
    return (
        <div>
            <p
                style={{
                    color: "#D4D4D8",
                    fontSize: 14,
                    marginBottom: 4,
                }}
            >
                {label}
            </p>

            <p
                style={{
                    fontSize: 14,
                    color: "#fff"
                }}
                {...props}
            >
                {value}
            </p>
        </div>
    )
}

export default DuoInfo;