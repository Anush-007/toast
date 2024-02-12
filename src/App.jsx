import Toast from './components/Toast';

function App() {
	return (
		<>
			<Toast
				message='This is a toast'
				action='Undo'
				// variant='informative'
				actionCallback={e => console.log(e)}
			/>
			{/* <Toast>Hello</Toast> */}
			<div>App</div>
		</>
	);
}

export default App;
