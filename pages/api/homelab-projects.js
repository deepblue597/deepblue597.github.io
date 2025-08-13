import data from "./homelab-projects.json";

export const getHomelabProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getHomelabProjects();
  res.json(projects);
};
