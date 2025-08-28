function OpenEmail({ email, setSelected }) {
    if (email != null) {
        return (
            <div>
                <input
                    type="button"
                    value="Back"
                    onClick={() => setSelected(null)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                />
                <p>
                    <br />
                    <b>From:</b> {email.sender} <br />
                    <b>Subject:</b> {email.title} <br />
                    <br />
                    {email.content}
                </p>
            </div>
        )
    }
}

export default OpenEmail