import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./todo/Todos";
import Navbar from "./components/Navbar";
import "./index.css";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<section className='h-full max-w-xl mx-auto'>
				<Navbar />
				<Todos />
			</section>
		</QueryClientProvider>
	);
}

export default App;
