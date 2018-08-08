import gql from 'graphql-tag'

export const LIST_ARTICLE_QUERY = gql`
{
  nodeQuery(filter: {
    conditions: {
      field: "type",
      value: "article"
    }
  }) {
    entities {
      ... on NodeArticle {
        title,
        nid
      }
    }
  }
}
`

export const ARTICLE_QUERY = gql`
query getArticle($id: String = "1") {
  nodeById(id: $id) {
    nid,
    title,
    body {
      processed
      format
    },
    fieldParagraphs {
      entity {
        ... on ParagraphTextWithIcons {
          type {
            targetId
          },
          fieldLeftContent {
            processed
          },
          fieldRightContent {
            entity {
              type {
                targetId
              },
              fieldTitle,
              fieldDesc,
              fieldIcon {
                entity {
                  fieldSvg {
                    entity {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
