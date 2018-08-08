import gql from 'graphql-tag'

export const MAIN_MENU_QUERY = gql`
{
  menuByName(name: "main") {
    name
    links {
      label
      url {
        path
        routed
      }
      description
      expanded
      links {
        label
        description
        expanded
      }
    }
  }
}
`
