import React from 'react'
import './profilePage.css'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../Utility/apiRequest";

const followUser = async (username) => {
  console.log(username);
  const res = await apiRequest.post(`/users/follow/${username}`);
  return res.data;
};

const FollowButton = ({ isFollowing, username }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
    },
  });

  return (
    <button
      onClick={() => mutation.mutate(username)}
      disabled={mutation.isPending}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;