export interface ProjectsPageProps {
  data: {
    allContentfulProject: {
      group: [{ [key: string]: string }];
    };
  };
}
