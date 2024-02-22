import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Modal } from "antd";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

// Define interface for event items
interface IEventItems {
  _id?: string;
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
  } = useForm<IEventItems>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<IEventItems> = async (data) => {
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

  const { isLoading, error, data } = useQuery({
    queryKey: ["eventItems"],
    queryFn: async () =>
      await axios
        .get("https://event-360-serverr.vercel.app/api/v1/event-items")
        .then((res) => res?.data?.data),
  });

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p>An error has occurred: {error?.message}</p>
      </div>
    );
  }

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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Update Action</TableHead>
            <TableHead>Delete Action</TableHead>
          </TableRow>
        </TableHeader>

        {data?.map((item: IEventItems) => (
          <TableBody key={item?._id}>
            <TableRow>
              <TableCell>
                <img
                  src={item.imageURL}
                  alt={item?.eventName}
                  className="rounded-full h-[70px] w-[70px] object-cover"
                />
              </TableCell>

              <TableCell className="font-medium">{item.eventName}</TableCell>

              <TableCell>
                <Button className="rounded-full" size="sm">
                  Update
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  className="rounded-full"
                  variant="destructive"
                  size="sm"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </main>
  );
};

export default EventItems;
