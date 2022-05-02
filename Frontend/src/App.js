import './App.css';
import Header from './components/header';
import CreateNoteCard from './components/create_note_card';
import AllNotes from './components/all_notes';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNoteCard />
      <AllNotes />
    </div>
  );
}

export default App;
