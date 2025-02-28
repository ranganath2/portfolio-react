import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Project Details</h2>
      <p>Details about project {id} will go here.</p>
    </div>
  );
}

export default ProjectDetail;
