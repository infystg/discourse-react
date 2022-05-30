import React, { useEffect, useState, Fragment } from 'react';
import { Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [current, setCurrent] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/categories?size=50`)
      .then(res => setCategories(res.data.categoryResponses))
      .catch(err => setCategories([]));
  }, []);

  const toggle = () => {
    setShow(!show);
    setCurrent(null);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.name;
    const description = e.target.description;
    const color = e.target.color;
    const text_color = e.target.text_color;

    if (name.value === '' || description.value === '' || color.value === '#000000') return toast.error('Please fill in all the Details');

    if (current === null) {
      axios
        .post('/api/categories', { name: name.value, description: description.value, color: color.value, text_color: text_color.value })
        .then(res => {
          toast.success(`${res.data.name} Category Added Sucessfully`);
          name.value = '';
          description.value = '';
          color.value = '';
          text_color.value = '';
          toggle();
          setCategories([...categories, res.data]);
        })
        .catch(error => toast.error(error));
    } else {
      axios
        .put(`/api/categories/${current.id}`, {
          name: name.value,
          description: description.value,
          color: color.value,
          text_color: text_color.value,
        })
        .then(res => {
          toast.success(`${res.data.category.name} Category Updated Sucessfully`);
          name.value = '';
          description.value = '';
          color.value = '';
          text_color.value = '';
          setCurrent(null);
          toggle();
          setCategories(categories.map(element => (element.id === current.id ? res.data.category : element)));
        })
        .catch(error => toast.error(error));
    }
  };

  const editCategory = currentCategory => {
    toggle();
    setCurrent(currentCategory);
  };

  return (
    <Fragment>
      <Modal isOpen={show} centered={true}>
        <ModalHeader toggle={toggle}>{current === null ? 'Create' : 'Edit'} Category</ModalHeader>
        <ModalBody>
          <Form id="categoryForm" className="p-3" onSubmit={handleFormSubmit}>
            <FormGroup row>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Name" defaultValue={current === null ? '' : current.name} />
            </FormGroup>
            <FormGroup row>
              <Col sm="6">
                <Label for="color">Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="color"
                  placeholder="Color"
                  defaultValue={current === null ? '#000000' : current.color}
                />
              </Col>
              <Col sm="6">
                <Label for="text_color">Text Color</Label>
                <Input
                  type="color"
                  name="text_color"
                  id="text_color"
                  placeholder="Text Color"
                  defaultValue={current === null ? '#000000' : current.text_color}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                defaultValue={current === null ? '' : current.description}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
          <Button type="submit" form="categoryForm" className="primary-btn">
            Submit
          </Button>
        </ModalFooter>
      </Modal>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Categories</h1>
        <Button className="filter-btn shadow primary-btn btn-font" onClick={toggle}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1rem' }}></FontAwesomeIcon> Category
        </Button>
      </div>
      <div className="my-4">
        <table className="styled-table shadow">
          <thead>
            <tr>
              <th>Color</th>
              <th>Category</th>
              <th>Text</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(element => (
              <tr key={element.id}>
                <td style={{ backgroundColor: element.color, opacity: '0.75' }}></td>
                <td>{element.name}</td>
                <td style={{ backgroundColor: element.text_color, opacity: '0.75' }}></td>
                <td>{element.description}</td>
                <td>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      editCategory(element);
                    }}
                  >
                    <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Categories;
