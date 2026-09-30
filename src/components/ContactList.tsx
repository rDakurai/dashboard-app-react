import type { Contact } from '../assets/types/contact';
import ContactRow from './ContactRow';

const contacts: Contact[] = [
  { id: 1, name: 'Maria Belén Jaramillo Arguello', email: 'niñasauceña@sauces.com' },
  { id: 2, name: 'Juan Perez', email: 'juan@example.com' },
  
];

function ContactList() {
  return (
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact) => (
                <ContactRow key={contact.id} contact={contact} />
            ))}
        </tbody>
    </table>
  );
}

export default ContactList;