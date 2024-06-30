const Header = ({ course }) => {
  console.log({course})
  return (
    <h1>{course}</h1>
  );
}

const Part = ({ part }) => {
  console.log({part})
  return (
    <p>{part.name} {part.exercise}</p>
  );
}

const Content = ({ props }) => {
  return (
    <>
    {props.map((part) => <Part part={part} />)}
    </>
  );
}

const Total = ({part}) => {
  let total = 0;
  part.map(x => {total+=x.exercises})
  return (
    <p>Number of Exercises {total}</p>
  );
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course={course.name} />
      <Content props={course.parts}/>
      <Total part={course.parts}/>
    </>
    
  );
}

export default App;
