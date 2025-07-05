const GoalItem = ({title, goal}) => {
  return (
    <>
        <h2 className="text-2xl font-bold mb-4">
            {title}
        </h2>
        <p className="text-lg mb-6">
            {goal}
        </p>
    </>
  )
}

export default GoalItem