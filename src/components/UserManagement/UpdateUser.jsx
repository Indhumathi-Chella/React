import React from "react";
import { updateUser } from "../../services/userService";

const UpdateUserModal = ({
  editingUser,
  editFormData,
  setEditFormData,
  setEditingUser,
  setUsers,
  users,
  setLoading,
  setError,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  const handleSave = () => {
    setLoading(true);
    updateUser(editingUser.id, editFormData)
      .then((res) => {
        setUsers(
          users.map((user) => (user.id === editingUser.id ? res.data : user))
        );
        setEditingUser(null);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update");
        setLoading(false);
      });
  };

  if (!editingUser) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit User</h3>
        <label>
          Name:{" "}
          <input
            name="name"
            value={editFormData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            name="email"
            value={editFormData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={editFormData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button onClick={handleSave} className="btn btn-save">
          Save
        </button>
        <button onClick={handleCancel} className="btn btn-delete">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateUserModal;
