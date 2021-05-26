import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import ContactFilter from './components/ContactFilter';

const App = () => (
  <>
    <ContactForm />
    <Title title="Contacts" />
    <ContactFilter />
    <ContactsList />
  </>
);

export default App;
