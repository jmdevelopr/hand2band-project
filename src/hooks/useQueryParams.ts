import { useHistory } from 'react-router-dom';

export default function useQueryParams(): URLSearchParams {
  const history = useHistory();
  const { search } = history.location;

  const params = new URLSearchParams(search);

  return params;
}
