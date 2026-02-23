import React, { useState } from 'react';

const PharmacyPage = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', category: 'Analgesic', price: 5.50, stock: 100, expiryDate: '2026-12-01' },
    { id: 2, name: 'Amoxicillin', category: 'Antibiotic', price: 12.00, stock: 50, expiryDate: '2025-06-15' },
    { id: 3, name: 'Cetirizine', category: 'Antihistamine', price: 8.25, stock: 75, expiryDate: '2025-09-20' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentMedicine, setCurrentMedicine] = useState({ name: '', category: '', price: '', stock: '', expiryDate: '' });
  const [isEditing, setIsEditing] = useState(false);

  const filteredMedicines = medicines.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (medicine = { name: '', category: '', price: '', stock: '', expiryDate: '' }, editing = false) => {
    setCurrentMedicine(medicine);
    setIsEditing(editing);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentMedicine({ name: '', category: '', price: '', stock: '', expiryDate: '' });
  };

  const handleSaveMedicine = (e) => {
    e.preventDefault();
    if (isEditing) {
      setMedicines(medicines.map(med => med.id === currentMedicine.id ? currentMedicine : med));
    } else {
      setMedicines([...medicines, { ...currentMedicine, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const handleDeleteMedicine = (id) => {
    if (window.confirm('Are you sure you want to delete this medicine?')) {
      setMedicines(medicines.filter(med => med.id !== id));
    }
  };

  return (
    <div className="container-fluid h-100 p-0 m-0">
     123 <div className="row g-0 h-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white p-3 vh-100 d-none d-md-block sticky-top">
          <h4 className="mb-4">PharmaManage</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link text-white p-2 rounded hover-bg-primary">
                <i className="bi bi-house-door me-2"></i> Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white active bg-primary p-2 rounded">
                <i className="bi bi-capsule me-2"></i> Inventory
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white p-2 rounded">
                <i className="bi bi-cart-check me-2"></i> Orders
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white p-2 rounded">
                <i className="bi bi-people me-2"></i> Staff
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 bg-light p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-dark">Medicine Inventory</h2>
            <button className="btn btn-primary shadow-sm" onClick={() => handleOpenModal()}>
              <i className="bi bi-plus-lg me-2"></i> Add New Medicine
            </button>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-capsule text-primary fs-4"></i>
                  </div>
                  <div>
                    <p className="text-muted mb-0">Total Medicines</p>
                    <h4 className="fw-bold mb-0">{medicines.length}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                  </div>
                  <div>
                    <p className="text-muted mb-0">Low Stock Items</p>
                    <h4 className="fw-bold mb-0">{medicines.filter(m => m.stock < 10).length}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search by name or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Medicines Table */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="px-4 py-3 border-0">Name</th>
                      <th className="py-3 border-0">Category</th>
                      <th className="py-3 border-0">Price</th>
                      <th className="py-3 border-0">Stock</th>
                      <th className="py-3 border-0">Expiry</th>
                      <th className="px-4 py-3 border-0 text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMedicines.map(med => (
                      <tr key={med.id}>
                        <td className="px-4 fw-medium">{med.name}</td>
                        <td><span className="badge bg-info-subtle text-info px-2 py-1 rounded">{med.category}</span></td>
                        <td>${med.price.toFixed(2)}</td>
                        <td>
                          <span className={`fw-bold ${med.stock < 20 ? 'text-danger' : 'text-success'}`}>
                            {med.stock}
                          </span>
                        </td>
                        <td>{med.expiryDate}</td>
                        <td className="px-4 text-end">
                          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleOpenModal(med, true)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteMedicine(med.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{isEditing ? 'Edit Medicine' : 'Add New Medicine'}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <form onSubmit={handleSaveMedicine}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Medicine Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={currentMedicine.name}
                      onChange={(e) => setCurrentMedicine({ ...currentMedicine, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      required
                      value={currentMedicine.category}
                      onChange={(e) => setCurrentMedicine({ ...currentMedicine, category: e.target.value })}
                    >
                      <option value="">Select Category</option>
                      <option value="Analgesic">Analgesic</option>
                      <option value="Antibiotic">Antibiotic</option>
                      <option value="Antihistamine">Antihistamine</option>
                      <option value="Antipyretic">Antipyretic</option>
                      <option value="Antidiabetic">Antidiabetic</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        required
                        value={currentMedicine.price}
                        onChange={(e) => setCurrentMedicine({ ...currentMedicine, price: parseFloat(e.target.value) })}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Stock Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        value={currentMedicine.stock}
                        onChange={(e) => setCurrentMedicine({ ...currentMedicine, stock: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      value={currentMedicine.expiryDate}
                      onChange={(e) => setCurrentMedicine({ ...currentMedicine, expiryDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-light" onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" className="btn btn-primary px-4">{isEditing ? 'Update Medicine' : 'Save Medicine'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyPage;