import { useMemo, useState } from "react";
import styles from "./Todo.module.css";
import { Empty, Form, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import AddTaskModal from "../Components/Modal/AddTaskModal";
import TodoCard from "./Card/TodoCard";
import { cardBg, STATUS_TYPE } from "../Constant/Constants";
import Header from "./Header";
import useTodo from "../hooks/useTodo";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function Todo() {
  const [form] = Form.useForm();
  // State to store all filters
  const [queryFilter, setQueryFilter] = useState({});
  // CRUD hooks
  const { createTodo, todos, updateTodo, deleteTodo, error, loading } = useTodo();
  // Open or close modal
  const [openModal, setModalOpen] = useState(false);
  // Selected task for edit
  const [selectedTaskForEdit, setSelectedTaskForEdit] = useState(null)
  // Get random bg color for cards
  const getRandomBackground = async (array) => {
    const randomIndex = Math.floor(Math.random() * array?.length)
    return array?.[randomIndex] || array[1]
  }

  // Store each task
  const handleCreatedTask = async (values) => {
    try {
      // To update existing todo
      if (selectedTaskForEdit) {
        updateTodo(selectedTaskForEdit?._id,
          {
            ...values,
            date: values?.date,
            status: STATUS_TYPE.PENDING
          })
      } else {
        createTodo({
          title: values?.title,
          description: values?.description,
          date: values?.date,
          priority: values?.priority || "low",
          status: STATUS_TYPE.PENDING,
          backgroundColor: await getRandomBackground(cardBg)
        })
      }
    }
    catch (err) {
      console.error(err);
    }
    closeModal();
  };

  // CloseModal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedTaskForEdit(null)
  };

  // Edit a task
  const onEditTask = (task) => {
    setSelectedTaskForEdit(task);
    setModalOpen(true)
  }

  // Delete a task
  const onDeleteTask = async (task) => {
    try {
      deleteTodo(task?._id)
    }
    catch (err) {
      console.err(err);
    }
  }

  // Set a todo as complete 
  const onTaskStatusChange = async (task, status) => {
    try {
      if (status === STATUS_TYPE.PENDING) {
        updateTodo(task?._id, { status: STATUS_TYPE.COMPLETE })
      }
      else if (status === STATUS_TYPE.COMPLETE) {
        updateTodo(task?._id, { status: STATUS_TYPE.PENDING })
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  const memoizedAddTaskModal = useMemo(() => {
    return (<AddTaskModal
      form={form}
      onTaskSubmit={handleCreatedTask}
      closeModal={closeModal}
      activeTask={selectedTaskForEdit}
    />)
  }, [selectedTaskForEdit])

  return (
    <div className={styles.wrapper}>
      <Layout style={{ height: "100vh" }}>
        <Header setModalOpen={setModalOpen} queryFilter={queryFilter} setQueryFilter={setQueryFilter} />
        <Content className={styles.contentStyle}>
          {loading && (<div className={styles.loader}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><Spin size="large" /><div style={{ color: "var(--elevate5)", marginLeft: "6px" }}>Loading...</div></div>
          </div>)}
          {
            todos?.length === 0 && !loading ? <Empty
              className={styles.emptyImage}
              image={
                <PlusCircleOutlined
                  className={styles.addIconLarge}
                />
              }
              description={
                <span style={{ fontSize: "var(--medium_font)" }}>
                  No tasks yet? No worries! Click 'Add Task' to start building your
                  perfectly orchestrated day.
                </span>
              }
            /> : ""
          }
          {openModal && (
            memoizedAddTaskModal
          )}
          <TodoCard list={todos} onEditTask={onEditTask} onDeleteTask={onDeleteTask} onTaskStatusChange={onTaskStatusChange} />
        </Content>
      </Layout>
    </div>
  );
}