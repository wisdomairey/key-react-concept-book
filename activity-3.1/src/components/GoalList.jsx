import GoalItem from "./GoalItem"

const GoalList = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md text-left">
      <GoalItem
        title="🎯 Goal 1: Build Real-World Web Applications"
        goal="Learn React to create dynamic, modern web applications like personal portfolios, blogs, dashboards, or even e-commerce sites. By mastering components, props, state, and routing, you’ll be able to turn your ideas into fully functional, responsive user interfaces."
      />
      <GoalItem
        title="🎯 Goal 2: Master State Management"
        goal="Understand how to manage application state effectively using tools like Redux or Context API. This will help you build scalable applications that can handle complex data flows and user interactions."
      />
      <GoalItem
        title="🎯 Goal 3: Prepare for a Frontend Developer Job"
        goal="Use React as a stepping stone toward landing a developer role. React is one of the most in-demand libraries in frontend development. Learning it equips you with the skills needed to apply for roles that require knowledge of modern JavaScript frameworks, state management, testing, and deployment workflows."
      />
    </div>
  )
}

export default GoalList