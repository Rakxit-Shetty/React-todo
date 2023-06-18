import Todo from './components/Todo'
import '../src/CSS/style.css'
function App() {
  return (
    <>
    <Todo/>
    <footer className="footer">
  	    <div>&#169; {new Date().getFullYear()} to Learn React JS components by 
		        <a href="https://rakshithshetty.vercel.app"> &nbsp; Rakxit-Shetty</a>
	      </div>
	    </footer>
    </>
  );
}

export default App;
