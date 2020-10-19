import { useMemo } from 'react';
import queryString from 'query-string';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

// Taken from https://usehooks.com/useRouter/
const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    return useMemo(() => {
        return {
          push: history.push,
          replace: history.replace,
          pathname: location.pathname,
          query: {
            ...queryString.parse(location.search), // Convert string to object
            ...params
          },
          match,
          location,
          history
        };
      }, [params, match, location, history]);
}

export default useRouter;