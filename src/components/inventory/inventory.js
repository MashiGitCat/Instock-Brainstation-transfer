import "./inventory.scss";
import Search from "../../assets/Icons/search-24px.svg";
import Forward from "../../assets/Icons/chevron_right-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
const inventory = () => {
  return (
    <section className="inventory">
      <div className="inventory__list-card">
        <div className="inventory__content-wrapper">
          <div className="inventory__content">
            <h1 className="inventory__header">Inventory</h1>

            <div className="inventory__search-container">
              <img
                src={Search}
                alt="serch-icon"
                className="inventory__search-icon"
              />
              <input
                type="text"
                placeholder="Search..."
                className="inventory__search-input"
              />
            </div>
            <button className="inventory__add-button">
              + Add New inventory
            </button>
          </div>
        </div>
        <div className="inventory__list-header-set">
          <div className="inventory__list-header">
            <div className="inventory__list-itemset">
              <p className="inventory__detail-heading-tab">Inventory item</p>
              <img className="inventory__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="inventory__list-header-items">
              <p className="inventory__detail-heading-tab">status</p>
              <img className="inventory__sort-image" src={Sort} alt="forward" />
            </div>
          </div>
          <div className="inventory__list-header-left">
            <div className="inventory__list-header-name">
              <p className="inventory__detail-heading-tab">category</p>
              <img className="inventory__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="inventory__list-header-contactinfo">
              <p className="inventory__detail-heading-tab">Qty</p>
              <img className="inventory__sort-image" src={Sort} alt="forward" />
            </div>
            <div className="inventory__list-header-action">
              <p className="inventory__detail-heading-tab">actions</p>
            </div>
          </div>
        </div>
        <div className="inventory__content-wrapper-list">
          <div className="inventory__content-list">
            <div className="inventory__content-flex">
              <div className="inventory__content-left">
                <div className="inventory__content-space">
                  <div className="inventory__sort-icon">
                    <p className="inventory__detail-heading">inventory item</p>
                  </div>
                  <div className="inventory__forward-next">
                    <p className=" inventory__detail-name">status</p>
                    <img src={Forward} alt="forward" />
                  </div>
                </div>
                <div className="inventory__icon-wrap">
                  <p className="inventory__detail-heading">category</p>
                  <p className=" inventory__detail">electronic</p>
                </div>
              </div>
              <div className="inventory__content-right">
                <div className="inventory__content-space-name">
                  <p className="inventory__detail-heading">status</p>

                  <p className=" inventory__detail">instock</p>
                </div>
                <div>
                  <p className="inventory__detail-heading">qty</p>
                  <p className=" inventory__detail">500</p>
                </div>
              </div>
            </div>
            <div className="inventory__item-icon">
              <img
                className="inventory__icon-image"
                src={Delete}
                alt="delete"
              />
              <img className="inventory__icon-image" src={Edit} alt="edit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventory;
