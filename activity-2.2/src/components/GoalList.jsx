import FirstGoal from "./FirstGoal"
import SecondGoal from "./SecondGoal"
import ThirdGoal from "./ThirdGoal"

const GoalList = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md text-left">
      <FirstGoal />
      <SecondGoal />
      <ThirdGoal />
    </div>
  )
}

export default GoalList