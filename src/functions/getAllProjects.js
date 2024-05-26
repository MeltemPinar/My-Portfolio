import { gql } from "graphql-request";
import { graphcms } from "../../client";

export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    {
      projects(first: 17, skip: 17) {
        id
        title
        description
        image {
          url
        }
        source
        tags
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProjectsQuery);

  return await projects;
};
