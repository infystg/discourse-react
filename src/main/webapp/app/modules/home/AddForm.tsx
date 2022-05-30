import axios from 'axios';

import React, { Fragment, useState, useRef } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const AddForm = ({ categories, formType }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    const title = e.target.title;
    const category = e.target.category;
    const comma = e.target.comma;

    if (title.value === '' || content === '') return toast.error('Please fill in all the Details');

    if (formType !== 'ANNOUNCEMENT') {
      if (category.value === null) return toast.error('Please fill in all the Details');
      axios
        .post('/api/message', { archetype: formType, category: category.value, raw: content, tags: comma.value, title: title.value })
        .then(res => {
          toast.success(`${res.data} Added Sucessfully`);
          title.value = '';
          category.value = null;
          comma.value = '';
          setContent('');
          toggleTopicInput(e);
        })
        .catch(error => toast.error(error));
    } else {
      axios
        .post('/api/announcements', { raw: content, title: title.value })
        .then(res => {
          toast.success(`New Announcement Added Sucessfully`);
          title.value = '';
          setContent('');
          toggleTopicInput(e);
        })
        .catch(error => toast.error(error));
    }
  };

  const toggleTopicInput = e => {
    e.preventDefault();
    const topicBox = document.getElementById('topicBox');
    topicBox.classList.toggle('show-form');
  };

  return (
    <Form id="topicForm" onSubmit={handleFormSubmit}>
      <Row id="topicBox">
        <Col sm="0" md="6"></Col>
        <Col sm="12" md="6">
          <div className="card topic-input p-3 my-2">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input type="text" name="title" id="title" />
                </FormGroup>
              </Col>
              {formType === 'ANNOUNCEMENT' ? (
                ''
              ) : (
                <Fragment>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="category">Category</Label>
                      <select className="form-select" name="category" id="category">
                        <option defaultChecked={true} value={null}>
                          All Categories
                        </option>
                        {categories.length !== 0
                          ? categories.map(element => (
                              <option key={element.id} value={element.id}>
                                {element.name}
                              </option>
                            ))
                          : ''}
                      </select>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="comma">Comma Seperated Tags</Label>
                      <Input type="text" name="comma" id="comma" />
                    </FormGroup>
                  </Col>
                </Fragment>
              )}
            </Row>
          </div>
        </Col>
        <Col sm="0" md="2"></Col>
        <Col sm="12" md="10">
          <div className="card topic-input p-3 my-2">
            <JoditEditor
              ref={editor}
              value={content}
              config={{
                readonly: false,
                height: '300',
              }}
              onBlur={newContent => setContent(newContent)}
            />
          </div>
        </Col>
        <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
          <Button style={{ display: 'inline' }} type="submit" form="topicForm" className="filter-btn shadow primary-btn">
            Submit
          </Button>
          <Button style={{ display: 'inline' }} className="filter-btn shadow bg-white" onClick={toggleTopicInput}>
            Close
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default AddForm;
