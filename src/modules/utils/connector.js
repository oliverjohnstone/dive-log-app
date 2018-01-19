import { graphql } from 'react-apollo';

export const connector = (query, ComponentUI) => graphql(query)(ComponentUI);
