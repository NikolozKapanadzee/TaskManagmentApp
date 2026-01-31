import { Plus } from "lucide-react";
import Button from "../../components/button/Button";
import TaskCardForm from "../../components/card/TaskCardForm";
import TaskModal from "../../components/modal/TaskModal";
import { useState } from "react";

export default function Dashboard() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  return (
    <main className="mx-auto flex flex-col p-12 gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl">My Tasks</h1>
          <p className="text-[hsl(215_16%_47%)]">
            <span>0</span> pending, <span>0</span> completed
          </p>
        </div>
        <Button
          onClick={() => setIsCreateOpen(true)}
          className="font-medium bg-[hsl(222_47%_11%)] cursor-pointer text-white rounded-md w-32 h-10 flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          Add Task
        </Button>
      </div>
      <div className="flex gap-3 bg-[hsl(210_40%_96%)] w-full max-w-80 p-2 items-center justify-around rounded-md mt-6">
        <Button className="text-[#64748B] cursor-pointer">
          Pending <span>(0)</span>
        </Button>
        <Button className="text-[#64748B] cursor-pointer">
          Completed <span>(0)</span>
        </Button>
        <Button className="text-[#64748B] cursor-pointer">
          All <span>(0)</span>
        </Button>
      </div>
      <TaskCardForm />
      <TaskCardForm />
      <TaskCardForm />
      <TaskCardForm />
      <TaskCardForm />
      <TaskCardForm />

      <TaskModal
        isOpen={isCreateOpen}
        title="Create Task"
        submitLabel="Create Task"
        onClose={() => setIsCreateOpen(false)}
        onSubmit={() => setIsCreateOpen(false)}
      />
    </main>
  );
}
