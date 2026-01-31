import { PenLine, Trash2 } from "lucide-react";
import Button from "../button/Button";
import TaskModal from "../modal/TaskModal";
import { useState } from "react";

const TaskCardForm = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="w-full border-[hsl(214_32%_91%)] bg-white border rounded-lg p-6">
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-3">
          <Button className="h-4 w-4 rounded-md bg-white cursor-pointer border"></Button>
          <h1>Welcome To Your Task Flow!</h1>
          <div>Low</div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setIsCreateOpen(true)}
            className="cursor-pointer"
          >
            <PenLine size={16} />
          </Button>
          <Button className="cursor-pointer">
            <Trash2 color="red" size={16} />
          </Button>
        </div>
      </div>
      <div>
        <p className="text-[hsl(215_16%_47%)] text-3.5">
          This is your first task. Try editing or completing it.
        </p>
      </div>
      <TaskModal
        isOpen={isCreateOpen}
        title="Edit Task"
        submitLabel="Save Changes"
        onClose={() => setIsCreateOpen(false)}
        onSubmit={() => setIsCreateOpen(false)}
      />
    </div>
  );
};

export default TaskCardForm;
