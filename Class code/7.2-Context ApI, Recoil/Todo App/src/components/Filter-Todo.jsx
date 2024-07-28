import { useRecoilState, useSetRecoilState } from "recoil";
import { dropFilter, searchFilter } from "../store/atoms/todo";

export function FilterTodo() {
  const setFilter = useSetRecoilState(searchFilter);
  const [dropValue, setDropValue] = useRecoilState(dropFilter);

  return (
    <div>
      <select value={dropValue} onChange={(e) => setDropValue(e.target.value)}>
        <option value="All Todo">All Todo</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incompleted</option>
      </select>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Type to filter out the value"
      />
    </div>
  );
}
