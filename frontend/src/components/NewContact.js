import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [nameOptions, setNameOptions] = useState([]);

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                address
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('');
        setAddress('');
    }

	return (
        <form className='new-contact' onSubmit={createContact}>
            <select value={nameOptions} onChange={(e) => setNameOptions(e.target.value)}>
                <option value="Max Well">Max Well</option>
                <option value="Tent Well">Tent Well</option>
                <option value="Went Well">Went Well</option>
                <option value="Fred Well">Fred Well</option>
            </select>
            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;