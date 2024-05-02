import { Flex, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { AddTaskProps } from "../types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <>
      <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
        <Input
          placeholder="Nouvelle tâche ... "
          size="md"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          style={{ background: "#fff" }}
        />
        <Button
          colorScheme="twitter"
          size="md"
          onClick={() => handleCreateTask()}
        >
          <AddIcon />
        </Button>
      </Flex>
    </>
  );
};

export default AddTask;
