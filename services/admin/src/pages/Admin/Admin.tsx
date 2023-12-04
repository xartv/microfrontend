import { counterActions } from "@packages/shared/src/store/slice/counterSlice";
import { useAppDispatch } from "@packages/shared/src/store/store";
import { useAppSelector } from "@packages/shared/src/store/store";
import { getCount } from "@packages/shared/src/store/selectors/getCount";

const Admin = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector(getCount);

  const inc = () => dispatch(counterActions.increment());

  return (
    <>
      <div>ADMIN COUNTER: {count}</div>
      <button onClick={inc}>INC COUNTER</button>
    </>
  );
};

export default Admin;
