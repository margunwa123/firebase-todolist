type status = "waiting" | "ready" | "in progress" | "done";

type todo = {
  name: string;
  status: status;
};
