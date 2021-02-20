export default
interface GraphqlImage {
  allFile: {
    edges: GraphqlImageNode[]
  }
}

interface GraphqlImageNode {
  node: {
    childrenImageSharp: [
      {
        fluid: {
          src: string
        }
      }
    ]
  }
}
