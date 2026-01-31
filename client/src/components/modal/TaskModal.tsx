import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import Button from "../button/Button";
import type { TaskFormValues, TaskModalProps } from "../../types/types";

export default function TaskModal({
  isOpen,
  title,
  submitLabel,
  defaultValues,
  onClose,
  onSubmit,
}: TaskModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
      urgency: "Medium",
      ...defaultValues,
    },
  });

  useEffect(() => {
    reset({
      title: "",
      description: "",
      urgency: "Medium",
      ...defaultValues,
    });
  }, [defaultValues, reset, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6">{title}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Title"
            placeholder="What needs to be done?"
            {...register("title", {
              required: "Title is required",
            })}
            error={errors.title?.message}
            className="w-full border rounded-md px-3 py-2"
          />
          <div>
            <label className="block text-sm font-medium mb-2 text-black">
              Description (optional)
            </label>
            <textarea
              {...register("description")}
              className="w-full border rounded-md px-3 py-2 resize-none"
              rows={3}
              placeholder="Add more details..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">
              Urgency
            </label>
            <select
              {...register("urgency")}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button onClick={onClose} className="px-4 py-2 border rounded-md">
              Cancel
            </Button>

            <Button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
