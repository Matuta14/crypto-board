import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routesMap from './routes';
import { Header } from './shared-components/header/header';
import { ContentLayoutStyled, MainLayoutStyled } from './layout/layout.styled';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const cache = new QueryCache();
export const queryClient = new QueryClient({
  queryCache: cache,
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routesMap.map(({ path, Component }, i) => (
              <Route
                key={i}
                path={path}
                element={
                  <MainLayoutStyled>
                    <Header />
                    <ContentLayoutStyled>
                      <Component />
                    </ContentLayoutStyled>
                  </MainLayoutStyled>
                }
              />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
