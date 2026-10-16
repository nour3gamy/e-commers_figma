"use client";
import { usersData } from "@/data/data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/lib/redux/usersSlice";
export default function InputData() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.data) {
      localStorage.setItem("data", JSON.stringify(usersData));
    }
    if (localStorage.user) dispatch(login(JSON.parse(localStorage.user)));
  }, [dispatch]);
}
