import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import TodoList from './components/TodoList';

function App() {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => 
  trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:2000/trpc",
      })
    ]
  }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
