import "./deleteWarehouse.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

const DeleteWarehouse = ({ warehouseName, onCancel, onDelete }) => {
  return (
    <article className="modal">
      <div className="modal__overlay" onClick={onCancel}></div>
      <div className="modal__content">
        <img
          onClick={onCancel}
          className="modal__content-closeIcon"
          src={closeIcon}
          alt="close icon"
        />
        <section className="modal__content-textWrap">
          <h1 className="modal__content-textWrap-header">
            Delete {warehouseName.warehouse_name} warehouse?
          </h1>
          <p className="modal__content-textWrap-text">
            Please confirm that you’d like to delete the{" "}
            {warehouseName.warehouse_name} from the list of warehouses. You
            won’t be able to undo this action.
          </p>
        </section>

        <section className="modal__content-buttonsWrap">
          <button
            onClick={onCancel}
            className="modal__content-buttonsWrap-button modal__content-buttonsWrap-button--cancel"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="modal__content-buttonsWrap-button modal__content-buttonsWrap-button--delete"
          >
            Delete
          </button>
        </section>
      </div>
    </article>
  );
};

export default DeleteWarehouse;
