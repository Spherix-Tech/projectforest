import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime: 1000 * 3,
    },
  },
});

// Custom logger
setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
