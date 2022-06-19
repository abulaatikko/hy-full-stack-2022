const Header = ({ course }) => {
    return <h2>{course}</h2>
}

const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}
  
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part part={part} key={part.id}></Part>
            )}
        </div>
    )
}
  
const Total = ({ parts }) => {
    const total = parts.reduce((prev, part) => prev + part.exercises, 0)
    return <p><strong>Number of exercises {total}</strong></p>
}
  
const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course