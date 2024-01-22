function Project(props) {
  const skills = props.skills.split(" ");

  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <img src={props.img} alt={props.alt} />
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default Project;
