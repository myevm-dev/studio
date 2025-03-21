import React, { useState } from "react";

interface TaskItem {
  task: string;
  status: string;
  details: string;
}

const TaskTable: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const tasks: TaskItem[] = [
    {
      task: "Task 1",
      status: "In Progress",
      details: "This task is currently in progress and is expected to be completed soon.",
    },
    {
      task: "Task 2",
      status: "Completed",
      details: "This task has been completed successfully.",
    },
    {
      task: "Task 3",
      status: "Pending",
      details: "This task is pending and requires attention.",
    },
    {
      task: "Task 4",
      status: "On Hold",
      details: "This task is on hold due to external dependencies.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the current task details open/close
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-accent2 text-center mb-6">Earn GenCredits by Completing Tasks</h1>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="border-2 border-accent1 rounded-lg">
            <div
              className={`flex justify-between items-center py-3 px-4 cursor-pointer bg-[#1a1a1a] rounded-t-lg ${
                activeIndex === index ? "bg-[#2a2a2a]" : "hover:bg-[#2a2a2a]"
              } hover:text-gray-200 transition`}
              onClick={() => handleToggle(index)}
            >
              <div>
                <h2 className="font-bold">{task.task}</h2>
                <p className="text-sm text-gray-400">Status: {task.status}</p>
              </div>
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="py-3 px-4 bg-[#1a1a1a] rounded-b-lg">
                <p>{task.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskTable;
