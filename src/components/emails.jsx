import Email from './email'

function Emails({ filteredEmails, toggleRead, toggleStar, openEmail, setSelected }) {
    return (
        <ul>
          {filteredEmails.map((email) => (
            <Email
                key={email.id}
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                openEmail={openEmail}
                setSelected={setSelected}
            />
          ))}
        </ul>
    )
}

export default Emails;