const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.course.parts.map((part, index) => {
        return <Part key={index} name={part.name} exercises={part.exercises} />
      })}
    </>
  )
}

const Total = (props) => {
  let total = 0
  return (
    <>
      {props.course.parts.forEach((part, index) => {
          total = total + part.exercises
        })
      }
      <p>Number of exercises: {total}</p>
    </>
  )
}


const App = () => {
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
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;
