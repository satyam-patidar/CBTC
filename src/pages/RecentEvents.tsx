import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal } from "antd";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Skeleton from "react-loading-skeleton";

// Define interface for recent events
interface IRecentEvents {
  _id?: string;
  eventName: string;
  organizer: string;
  imageURL: string;
}

const RecentEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IRecentEvents>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["recentItems"],
    queryFn: async () =>
      await axios
        .get("https://event-360-serverr.vercel.app/api/v1/recent-events")
        .then((res) => res?.data?.data),
  });

  const onSubmit: SubmitHandler<IRecentEvents> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://event-360-serverr.vercel.app/api/v1/recent-events",
        data
      );

      if (res?.data?.success === true) {
        setIsLoading(false);
        setIsModalOpen(false);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Recent event has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `https://event-360-serverr.vercel.app/api/v1/recent-events/${id}`
          );

          if (res?.data?.success === true) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Selected item has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
              <label>Organizer</label>
              <input
                type="text"
                className="w-full rounded px-3 py-2 focus:outline-none border"
                {...register("organizer", { required: true })}
              />

              {errors?.organizer && (
                <span className="text-red-500 text-sm">
                  Organizer is required
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

      {isLoading ? (
        <div className="mt-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton
                height={100}
                baseColor="#02011B"
                highlightColor="#384259"
                className="mb-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Update Action</TableHead>
              <TableHead>Delete Action</TableHead>
            </TableRow>
          </TableHeader>

          {data?.map((item: IRecentEvents) => (
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
                    onClick={() => handleDelete(item?._id)}
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
      )}
    </main>
  );
};

export default RecentEvents;
