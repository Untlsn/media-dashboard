import {graphql, useStaticQuery} from "gatsby";
import { GraphqlImage } from '@Interfaces/graphql'

export default
class Images {
  static getFromGraphQL() {
    const query = graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "icon"}}) {
          edges {
            node {
              childrenImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `

    const graphqlImageNodes = useStaticQuery<GraphqlImage>(query).allFile.edges
    const result: {[key: string]: string} = {}
    graphqlImageNodes.map(data => data.node.childrenImageSharp[0].fluid.src).forEach(src => {
      result[
        src.slice(src.lastIndexOf('/') + 1).slice(0, -4)
        ] = src
    })

    return result
  }
}

export
const getFromGraphQL = Images.getFromGraphQL
