import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Modal } from "antd";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoadingSpinner from "@/components/LoadingSpinner";

// Define an interface for the form data
interface FormValues {
  eventName: string;
  imageURL: string;
}

const EventItems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://event-360-serverr.vercel.app/api/v1/event-items",
        data
      );

      if (res?.data?.success === true) {
        setIsLoading(false);
        setIsModalOpen(false);
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <main>
      <div className="flex justify-end">
        <Button onClick={showModal} className="rounded-full">
          Add Events
        </Button>

        <Modal
          title="Add New Recent Events"
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="space-y-1">
              <label>Event Name</label>
              <input
                type="text"
                className="w-full rounded px-3 py-2 focus:outline-none border"
                {...register("eventName", { required: true })}
              />

              {errors?.eventName && (
                <span className="text-red-500 text-sm">
                  Event name is required
                </span>
              )}
            </div>

            <div className="space-y-1">
              <label>Image URL</label>
              <input
                type="url"
                className="w-full rounded px-3 py-2 focus:outline-none border"
                {...register("imageURL", { required: true })}
              />

              {errors?.imageURL && (
                <span className="text-red-500 text-sm">
                  Image URL is required
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className={cn(
                  "rounded-full",
                  loading && buttonVariants({ variant: "loading" })
                )}
              >
                {loading ? <LoadingSpinner /> : "Submit"}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default EventItems;
