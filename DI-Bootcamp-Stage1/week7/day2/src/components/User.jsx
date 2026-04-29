import './user.css'


function User ({name, lastName, email, id}) {
    
    return (
        <div style={{display:"inline-block", border: "1px solid"}}>
            <h2 className='box'>{id}. Name: {name} {lastName}</h2>
            <p>{email}</p>
        </div>

    )
}

export default User;