// Delete.jsx
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Delete = ({ selectedItems, items, setItems }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const handleDeleteConfirm = () => {
    const itemIds = selectedItems.map((item) => item.id);
    axios
      .delete(`http://localhost:3003/employee/${itemIds.join(",")}`)
      .then(() => {
        setItems(items.filter((item) => !itemIds.includes(item.id)));
        setShowDeleteModal(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Button
        className="btn-2 ml-5"
        onClick={() => setShowDeleteModal(true)}
        disabled={selectedItems.length === 0}
      >
        Delete
      </Button>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the selected items?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Delete;
